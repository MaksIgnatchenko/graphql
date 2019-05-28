<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */
use App\Models\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'body' => $faker->text,
        'created_at' => now(),
        'updated_at' => now(),
    ];
});
