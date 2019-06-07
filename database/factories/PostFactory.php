<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */
use App\Models\Post;
use Faker\Generator as Faker;
use Illuminate\Http\UploadedFile;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'title' => $faker->words(3, true),
        'picture' => (new UploadedFile($faker->image(null, 300, 300, 'nature'), str_random()))->store('public/images'),
        'body' => $faker->text,
        'created_at' => now(),
        'updated_at' => now(),
    ];
});
