<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\User;
use App\Models\Facility;
use App\Models\event_participant;
use App\Models\event_facility;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class EventController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    //
    $events = Event::orderBy('created_at', 'desc')->get();
    return Inertia::render('Event/Index', [
      'events' => $events->load('event_participant', 'event_facility', 'event_facility.facility', 'event_participant.user'),
      'status' => session('status'),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
    $users = User::all();
    $facilities = Facility::all();
    return Inertia::render('Event/Create', [
      'users' => $users,
      'facilities' => $facilities,
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    //
    // dd($request);
    $request->validate([
      'name' => 'required',
      'date_time_start' => 'required',
      'participants' => 'required',
    ]);

    DB::transaction(function () use ($request) {
        $event = Event::create([
          'name' => $request->name,
          'date_time_start' => Carbon::parse($request->date_time_start),
          'date_time_end' => Carbon::parse($request->date_time_end),
          'location' => $request->location,
        ]);

        foreach ($request->participants as $participant) {
          $eventParticipant = event_participant::create([
            'event_id' => $event->id,
            'user_id' => $participant['id'],
          ]);
        }

        foreach ($request->facilities as $facility) {
          $eventFacility = event_facility::create([
            'event_id' => $event->id,
            'facility_id' => $facility['id'],
            'quantity' => $facility['quantity'],
            'status' => 'Pending',
          ]);
        }
      }
    );
    return to_route('admin.event.index')->with('status', 'Event created.');
  }

  /**
   * Display the specified resource.
   */
  public function show(Event $event)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Event $event)
  {
    //
    // dd($event->load('event_participant', 'event_facility', 'event_facility.facility', 'event_participant.user'),);
    $users = User::all();
    $facilities = Facility::all();
    return Inertia::render('Event/Edit', [
      'event' => $event->load('event_participant', 'event_facility', 'event_facility.facility', 'event_participant.user'),
      'users' => $users,
      'facilities' => $facilities,
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Event $event)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Event $event)
  {
    //
  }
}
