<?php
/**
 * Created by Maksym Ignatchenko, Appus Studio LP on 22.05.19
 *
 */

namespace App\GraphQL\Query;

use App\Models\Post;
use Rebing\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;

class PostQuery extends Query
{
    protected $attributes = [
        'name' => 'Posts query'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('post'));
    }

    public function args()
    {
        return [
            'user_id' => ['name' => 'user_id', 'type' => Type::string()],
        ];
    }

    public function resolve($root, $args)
    {
        if (isset($args['user_id'])) {
            return Post::where('user_id' , $args['user_id'])->get();
        }

        return Post::all();
    }
}
