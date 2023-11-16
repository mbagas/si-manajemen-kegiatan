<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\EventFacilityController;
use App\Http\Controllers\EventParticipantController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

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
Route::middleware(['Staff'])->name('staff.')->prefix('Staff')->group(function () {
  Route::resource('event', EventController::class);
  Route::resource('event-participant', EventParticipantController::class);
});

Route::middleware(['OfficeMaid'])->name('officeMaid.')->prefix('OfficeMaid')->group(function () {
  Route::resource('event', EventController::class);
  Route::resource('event-facility', EventFacilityController::class);
  Route::resource('facility', FacilityController::class);
});

Route::middleware(['Admin'])->name('admin.')->prefix('Admin')->group(function () {
  Route::resource('user', UserController::class);
  Route::resource('event', EventController::class);
  Route::resource('facility', FacilityController::class);
  Route::PATCH('/event/{event}/notulensi', [EventController::class, 'updateNotulensi'])->name('event.updateNotulensi');
});


Route::get('/', function () {
  return to_route('login');
});

Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
