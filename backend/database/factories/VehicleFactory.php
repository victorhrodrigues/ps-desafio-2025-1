<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vehicle>
 */
class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->words(3, true),
            'brand' => $this->faker->company(),
            'year_of_manufacture' => $this->faker->numberBetween(1886, date('Y')),
            'image' => null,
            'category_id' => Category::exists() ? Category::inRandomOrder()->value('id'): Category::factory(),
            'quantity_in_stock' => $this->faker->numberBetween(1, 5),
        ];
    }
}
