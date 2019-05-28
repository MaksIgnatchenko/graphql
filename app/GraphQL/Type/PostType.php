<?php
/**
 * Created by Maksym Ignatchenko, Appus Studio LP on 22.05.19
 *
 */

namespace App\GraphQL\Type;

use App\Models\Post;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class PostType extends GraphQLType
{
    protected $attributes = [
        'name'          => 'Post',
        'description'   => 'A post',
        'model'         => Post::class,
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::id()),
                'description' => 'The id of the post',
            ],
            'body' => [
                'type' => Type::string(),
                'description' => 'a content of the post',
            ],
        ];
    }

}
