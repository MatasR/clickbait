<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Comment;
use Faker\Generator as Faker;

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'color_id' => mt_rand(1, 4000),
        'text' => $faker->sentence()
    ];
});
