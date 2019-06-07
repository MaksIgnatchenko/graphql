<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Storage;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * @param string|null $value
     * @return string|null
     */
    public function getAvatarAttribute(?string $value) : ?string
    {
        return env('APP_URL') . Storage::url($value);
    }

    /**
     * @return BelongsToMany
     */
    public function friends() : BelongsToMany
    {
        return $this->belongsToMany(
                User::class,
                'friends',
                'user_id',
                'friend_id'
        );
    }

    /**
     * @return HasMany
     */
    public function posts() : HasMany
    {
        return $this->hasMany(Post::class);
    }

    /**
     * @return MorphMany
     */
    public function likes() : MorphMany
    {
        return $this->morphMany(
            Like::class,
            'likeable'
        );
    }
}
