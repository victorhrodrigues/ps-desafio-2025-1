<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;
use Throwable;

class Vehicle extends Model
{
    /** @use HasFactory<\Database\Factories\VehicleFactory> */
    use HasFactory, HasUuids;

    protected $fillable =[
        'name',
        'brand',
        'year_of_manufacture',
        'image',
        'category_id',
        'quantity_in_stock'
    ];

    public function category():BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    protected static function booted()
    {
        self::deleted(function(Vehicle $vehicle)
        {
            try 
            {
                $image_name = explode('image/', $vehicle['image']);
                Storage::disk('public')->delete('image/'.$image_name[1]);
            }catch(Throwable)
            {
        
            }
        });
    }
}
