<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use Illuminate\Support\Str;
use Faker\Generator as Faker;
use \Illuminate\Http\UploadedFile;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(\App\Models\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'phone' => $faker->phoneNumber,
        'birthday' => $faker->dateTimeBetween('-30 years', '-20 years'),
        'country' => $faker->country,
        'avatar' => (new UploadedFile($faker->image(null, 300, 300, 'people'), str_random()))->store('public/images'),
        'email_verified_at' => now(),
        'password' => 'password',
        'remember_token' => Str::random(10),
    ];
});
