<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Like;
use Faker\Factory as Faker;

class LikesTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 6; $i++) {
            Like::create([
                'user_id' => $faker->numberBetween(1, 6),
                'post_id' => $faker->numberBetween(1, 6),
            ]);
        }
    }
}
