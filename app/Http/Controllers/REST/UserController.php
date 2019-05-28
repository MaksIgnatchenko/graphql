<?php
/**
 * Created by Maksym Ignatchenko, Appus Studio LP on 21.05.19
 *
 */

namespace App\Http\Controllers\Rest;

use App\Http\Controllers\Controller;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder;
use App\Models\User;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    /**
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index() : Response
    {
        return ResponseBuilder::success(User::with(['posts'])->get());
    }
}
