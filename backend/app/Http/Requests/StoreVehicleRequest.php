<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVehicleRequest extends FormRequest
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
            'name'=>['required', 'min:2', 'max:80'],
            'brand'=>['required', 'min:2', 'max:80'],
            'year_of_manufacture'=>['required', 'digits:4', 'integer', 'min:1886', 'max:'.date('Y')],
            'image'=>['file'],
            'category_id'=>['required'],
            'quantity_in_stock'=>['required', 'integer']
        ];
    }
}
