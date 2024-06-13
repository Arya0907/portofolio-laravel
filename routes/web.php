<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/contact.blade.php', function () {
    return view('contact');
});

Route::get('/index', function () {
    return view('index');
});

Route::get('/About.blade.php', function () {
    return view('About');
});

Route::get('/Work.blade.php', function () {
    return view('Work');
});

Route::get('/blog.blade.php', function () {
    return view('blog');
});


use App\Http\Controllers\ProjectController;

Route::resource('projects', ProjectController::class);
