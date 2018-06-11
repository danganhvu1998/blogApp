<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::resource('/api/blogs/', 'BlogsController');
Route::get('/api/blogs/{id}', 'BlogsController@show');

Route::post('/api/users/register', 'AuthenticationsController@register')->name('createUser');
Route::post('/api/users/login', 'AuthenticationsController@login')->name('authenUser');
Route::post('/api/users/changepass', 'AuthenticationsController@changePassword');
Route::post('/api/users/checktoken', 'AuthenticationsController@checkToken');
Route::get('/api/users/register/create', 'AuthenticationsController@create');


Route::post('/api/chats/test', 'ChatsController@test')->name('createChat');
Route::get('api/chats/test/create', 'ChatsController@testCreate');
