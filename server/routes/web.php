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
Route::get('/api/users/register/create', 'AuthenticationsController@create');

