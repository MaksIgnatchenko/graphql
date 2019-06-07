<?php
/**
 * Created by Maksym Ignatchenko, Appus Studio LP on 22.05.19
 *
 */

namespace App\GraphQL\Type;

use App\Models\User;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Type as GraphQLType;

class UserType extends GraphQLType
{
    protected $attributes = [
        'name'          => 'User',
        'description'   => 'A user',
        'model'         => User::class,
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::id()),
                'description' => 'The id of the user',
                'alias' => 'user_id', // Use 'alias', if the database column is different from the type name
            ],
            'name' => [
                'type' => Type::string(),
                'description' => 'The name of user',
            ],
            'avatar' => [
                'type' => Type::string(),
                'description' => 'The avatar of user',
            ],
            'email' => [
                'type' => Type::string(),
                'description' => 'The email of user',
            ],
            'phone' => [
                'type' => Type::string(),
                'description' => 'The phone number of user',
            ],
            'birthday' => [
                'type' => Type::string(),
                'description' => 'The birthday of user',
            ],
            'country' => [
                'type' => Type::string(),
                'description' => 'The user\'s country',
            ],
            'posts' => [
                'type' => Type::listOf(GraphQL::type('post')),
                'description' => 'The user posts'
            ],
            'friends_count' => [
                'type' => Type::int(),
                'description' => 'Friends count of a user',
            ],
            'posts_count' => [
                'type' => Type::int(),
                'description' => 'Posts count of a user',
            ],
        ];
    }

}
