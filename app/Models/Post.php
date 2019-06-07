<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Post extends Model
{
    /**
     * @param string|null $value
     * @return string|null
     */
    public function getPictureAttribute(?string $value) : ?string
    {
        return env('APP_URL') . Storage::url($value);
    }
}
