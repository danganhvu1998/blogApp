<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class AuthenticationsController extends Controller
{
    public function register(request $request){
        //Check if acc existed
    	$check = User::where('email', $request->username)->get();
        if(count($check)>0){
            return view('authentications.serverAccept')->with('result',0);
        }
        //Register New Acc
        $regis = new User;
    	$regis->name = $request->username;
    	$regis->email = $request->username;
    	$regis->password = $request->password;
    	$result = $regis->save();
    	//return view('authentications.serverAccept')->with('result',$result);
        $check = User::where('email', $request->username)->get();
        if(count($check)>0 and $check[0]->password==$request->password){
            return view('authentications.serverAccept')->with('result',$check[0]);
        }
    }

    public function login(request $request){
        //Check if acc existed
        $check = User::where('email', $request->username)->get();
        if(count($check)>0 and $check[0]->password==$request->password){
            return view('authentications.serverAccept')->with('result',$check[0]);
        }
        return view('authentications.serverAccept')->with('result',0);
    }

    public function create(){
        return view('authentications.create');
    }
}
/*
$table->increments('id');
$table->string('name');
$table->string('email')->unique();
$table->string('password');
$table->rememberToken();
$table->timestamps();
*/