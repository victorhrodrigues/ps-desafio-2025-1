'use client'

import { Button } from '@/components/button'
import {
  FormFieldsGroup,
  FormField,
  ImageForm,
  handleImageChange,
} from '@/components/dashboard/form'
import { DialogFooter } from '@/components/dialog'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { cn } from '@/lib/utils'
import { ResponseErrorType } from '@/services/api'
import { categoryType } from '@/types/category'
import { vehicleType } from '@/types/vehicle'
import { useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { api } from '@/services/api'
import { Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue } from '@/components/select'

interface FormFieldsVehicleProps {
  vehicle?: vehicleType | null
  readOnly?: boolean
  error?: ResponseErrorType | null
}

export default function FormFieldsVehicle({
  vehicle,
  readOnly,
  error,
}: FormFieldsVehicleProps) {
  const { pending } = useFormStatus()
  const [categories, setCategories] = useState<categoryType[]>()
  const [updateImage, setUpdateImage] = useState<string | undefined>()

  const requestData = async () =>
  {
    try{
      const response = await api('GET', '/categories')
      if(response.error){
        console.log('Não foi possível obter as categorias.')
      }else{
        setCategories(response.response as categoryType[])
      }
    }catch(e){
      console.log('Ocorreu um erro inesperado.')
    }
  }

  useEffect(()=>{
    requestData()
  }, [])


  return (
    <>
      <FormFieldsGroup>
        {vehicle && <Input defaultValue={vehicle.id} type="text" name="id" hidden />}
        <FormField>
          <Label htmlFor="name" required = {!vehicle}>
            Modelo
          </Label>
          <Input
            name = "name"
            id = "name"
            placeholder = "Insira o modelo do veículo"
            defaultValue = {vehicle?.name}
            disabled = {pending}
            readOnly = {readOnly}
            error = {error?.errors?.name}
          />
        </FormField>

        <FormField>
          <Label htmlFor="brand" required = {!vehicle}>
            Marca
          </Label>
          <Input
            name = "brand"
            id = "brand"
            placeholder = "Insira a marca do veículo"
            defaultValue = {vehicle?.brand}
            disabled = {pending}
            readOnly = {readOnly}
            error = {error?.errors?.brand}
          />
        </FormField>

        <FormField>
          <Label htmlFor="year_of_manufacture" required = {!vehicle}>
            Ano de fabricação
          </Label>
          <Input
            name = "year_of_manufacture"
            id = "year_of_manufacture"
            placeholder = "Insira o ano de fabricação YYYY"
            defaultValue = {vehicle?.year_of_manufacture}
            disabled = {pending}
            readOnly = {readOnly}
            error = {error?.errors?.year_of_manufacture}
          />
        </FormField>

        <FormField>
          <Label 
            htmlFor="image" 
            hidden={readOnly && !vehicle?.image}
            required = {!vehicle}
          >
            Imagem do veículo
          </Label>
          <Input
            name = "image"
            id = "image"
            type = "file"
            accept="image/png, image/jpeg, image/jpg, image/webp" //tratamento de tipo de imagens aceitas
            disabled = {pending}
            hidden = {readOnly}
            onChange = {(e) => handleImageChange(e, setUpdateImage)}
            error = {error?.errors?.image}
          />
          <ImageForm
            className = "aspect-square size-40"
            src = {updateImage || vehicle?.image}
          />
        </FormField>
        
        <FormField>
          <Select
            disabled = {pending || readOnly}
            name = "category_id"
            defaultValue = {vehicle?.category_id}
          >

          <Label>Categoria</Label>
          <SelectTrigger>
            <SelectValue placeholder = "Selecione a categoria do veículo"/>
          </SelectTrigger>
          <SelectContent id= "category_id">
            <SelectGroup id= "category_id">
              {categories?.map((category: categoryType, index: number) =>(
                <SelectItem value={category.id} key = {index}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
          </Select>
        </FormField>
        
        <FormField>
          <Label htmlFor="quantity_in_stock" required = {!vehicle}>
            Quantidade em estoque
          </Label>
          <Input
            name = "quantity_in_stock"
            id = "quantity_in_stock"
            placeholder = "Quantidade do veículo em estoque"
            defaultValue = {vehicle?.quantity_in_stock}
            disabled = {pending}
            readOnly = {readOnly}
            error = {error?.errors?.brand}
          />
        </FormField>

        {error?.errors?.category_id && (
          <p className = "text-destructive text-xs mt-2">
            {error?.errors.category_id}
          </p>
        )}

      </FormFieldsGroup>
      <DialogFooter className={cn({ hidden: readOnly })}>
        <Button type="submit" pending={pending}>
          Salvar
        </Button>
      </DialogFooter>
    </>
  )
}
