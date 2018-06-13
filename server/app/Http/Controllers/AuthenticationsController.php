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
            return view('authentications.serverRefuse');
        }
        //Register New Acc
        $regis = new User;
    	$regis->name = $request->username;
    	$regis->email = $request->username;
    	$regis->password = $request->password;
        $regis->remember_token = hash('ripemd160', $regis->name.$regis->email.$regis->password);
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
            $hashVal = hash('ripemd160', $request->username.$request->password);
            User::where('email', $request->username)->update(['remember_token' => $hashVal]);
            $check = User::where('email', $request->username)->get();
            return view('authentications.serverAccept')->with('result',$check[0]);
        }
        return view('authentications.serverRefuse');
    }

    public function changePassword(request $request){
        $check = User::where('email', $request->username)->get();
        if(count($check)>0 and $check[0]->password==$request->password and $check[0]->id==$request->id){
            User::where('id', $request->id)->update(['name' => $request->userName, 'password' => $request->userPass]);
            $check = User::where('email', $request->username)->get();
            return view('authentications.serverAccept')->with('result',$check[0]);
        }
        return view('authentications.serverRefuse');
        //id=12&password=hell&username=danganhvu@gmail.com&userName=Đặng Anh Vũ&userPass=hell
    }

    public function checkToken(request $request){
        $check = User::where('remember_token', $request->token)->get();
        if(count($check)>0){
            return view('authentications.serverAccept')->with('result',$check[0]);
        }
        return view('authentications.serverRefuse');
    }

    public function create(){
        return view('authentications.create');
    }

}
/*
hash('ripemd160', 'The quick brown fox jumped over the lazy dog.');
$table->increments('id');
$table->string('name');
$table->string('email')->unique();
$table->string('password');
$table->rememberToken();
$table->timestamps();
*/