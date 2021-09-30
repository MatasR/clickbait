<?php

use App\Color;
use Illuminate\Database\Seeder;

class ColorSeeder extends Seeder
{
    /**
     * Create 4k random colors
     *
     * @return void
     */
    public function run()
    {
        factory(Color::class, 4000)->create();
    }
}
