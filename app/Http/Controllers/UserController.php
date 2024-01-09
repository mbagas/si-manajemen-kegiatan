<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;

class UserController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    //
    $users = User::all();
    return Inertia::render('User/Index', [
      'users' => $users,
      'status' => session('status'),
    ]);
  }

  public function store(Request $request)
  {
    //
    $request->validate([
      'name' => 'required',
      'email' => 'required',
      'password' => 'required',
      'role' => 'required',
    ]);

    $user = User::create([
      'name' => $request->name,
      'email' => $request->email,
      'password' => $request->password,
      'role' => $request->role,
      'divisi' => $request->divisi,
    ]);
    
    return to_route('admin.user.index')->with('status', 'User created.');
  }

  public function update(Request $request, User $user)
  {
    //
    $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|string|email',
      'password' => ['required', 'confirmed', Rules\Password::defaults()],
      'role' => 'required',
    ]);
    $user->update([
      'name' => $request->name,
      'email' => $request->email,
      'password' => Hash::make($request->password),
      'role' => $request->role,
      'divisi' => $request->divisi,
    ]);

    return to_route('admin.user.index')->with('status', 'User updated.');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(User $user)
  {
    //
    $user->delete();
    return to_route('admin.user.index')->with('status', 'User deleted.');
  }

  
  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
    return Inertia::render('User/Create');
  }

  /**
   * Store a newly created resource in storage.
   */
  

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(User $user)
  {
    //
    // dd($user);
    return Inertia::render('User/Edit', [
      'user' => $user,
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  
}
