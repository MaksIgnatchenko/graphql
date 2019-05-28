<?php
/**
 * Created by Maksym Ignatchenko, Appus Studio LP on 22.05.19
 *
 */

namespace App\GraphQL\Mutation;

use App\Models\User;
use GraphQL;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Mutation;

class UpdateUserNameMutation extends Mutation
{
    protected $attributes = [
        'name' => 'UpdateUserName',
    ];

    public function type()
    {
        return GraphQL::type('user');
    }

    public function args()
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::nonNull(Type::string())],
            'password' => ['name' => 'password', 'type' => Type::string()],
            'name' => ['name' => 'name', 'type' => Type::nonNull(Type::string())],
        ];
    }

    public function resolve($root, $args)
    {
        $user = User::find($args['id']);
        if(!$user) {
            return null;
        }

        $user->name = $args['name'];
        $user->save();

        return $user;
    }
}
