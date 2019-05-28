<?php
/**
 * Created by Maksym Ignatchenko, Appus Studio LP on 22.05.19
 *
 */

namespace App\GraphQL\Query;

use App\Models\User;
use Rebing\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;

class UserByIdQuery extends Query
{
    protected $attributes = [
        'name' => 'userById'
    ];

    public function type()
    {
        return GraphQL::type('user');
    }

    public function args()
    {
        return [
            'id' => [
                'name' => 'id',
                'type' => Type::nonNull(Type::int()),
                'rules' => ['required'],
            ],
        ];
    }

    public function resolve($root, $args)
    {
//        if (isset($args['id'])) {
//            return User::where('id' , $args['id'])->get();
//        }
        return User::findOrfail($args['id']);
    }
}
