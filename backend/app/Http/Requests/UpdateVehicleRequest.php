<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVehicleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'=>['sometimes', 'min:2', 'max:80'],
            'brand'=>['sometimes', 'min:2', 'max:80'],
            'year_of_manufacture'=>['sometimes', 'digits:4', 'integer', 'min:1886', 'max:'.date('Y')],
            'image'=>['file'],
            'category_id'=>['sometimes'],
            'quantity_in_stock'=>['sometimes', 'integer']
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $exists = \App\Models\Vehicle::where('name', $this->name)
                ->where('brand', $this->brand)
                ->where('year_of_manufacture', $this->year_of_manufacture)
                ->where('category_id', $this->category_id)
                ->exists();

            if ($exists) {
                $validator->errors()->add('name', 'Não foi possível editar, já existe um veículo com esses dados.');
            }
        });
    }
}
