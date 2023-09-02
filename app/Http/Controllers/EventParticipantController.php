<?php

namespace App\Http\Controllers;

use App\Models\event_participant;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Carbon\Carbon;
use Inertia\Inertia;

class EventParticipantController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    //
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(event_participant $event_participant)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(event_participant $event_participant)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, event_participant $event_participant)
  {
    //

    $request->validate([
      'image'=>'required'
    ]);
    if(is_file($request->image)){
      $fileName = $request->id . '.' . $request->image->extension();
      $request->image->move(public_path('eventParticipant'), $fileName);

      $event_participant->update([
        'presence' => 'Hadir',
        'image' => $request->filename,
      ]);
    }
    
    return back();
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(event_participant $event_participant)
  {
    //
  }
}
