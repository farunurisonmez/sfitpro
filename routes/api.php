<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/*
 * auth:api, Passport kimlik doğrulama yöntemini ifade eder. Bu middleware, kullanıcının doğrulama işlemini Passport
 * ile gerçekleştirerek oturum açmış olup olmadığını kontrol eder.
 * Eğer geçerli bir erişim belgesi (access token) sağlanmışsa ve doğrulama başarılı ise, isteği işler ve
 * kullanıcı bilgilerini döndürür.
 * */
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('user')->group(function () {
    Route::post('/register', [\App\Http\Controllers\Api\UserController::class, 'register']);
    Route::post('/login', [\App\Http\Controllers\Api\UserController::class, 'login']);
});

