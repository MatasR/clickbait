<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('colors', 'ColorController@index');
Route::get('color/{color}', 'ColorController@show');
Route::put('colors/vote/{color}', 'ColorController@vote');
Route::post('color/{color}/edit', 'ColorController@update');

Route::get('comments/{color}', 'CommentController@index');
Route::post('comments', 'CommentController@store');
Route::post('comments/destroy/{comment}', 'CommentController@destroy');
