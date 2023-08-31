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
use App\Notifications\EventNotification;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    //
    $user = Auth::user();
    if($user->role == 'admin') {
      $events = Event::orderBy('created_at', 'desc')->get();
      return Inertia::render('Event/Index', [
        'events' => $events->load('event_participant', 'event_facility', 'event_facility.facility', 'event_participant.user'),
        'status' => session('status'),
      ]);
    } 
    else if ($user->role == 'staff') {
      $event = event_participant::where('user_id', $user->id)->orderBy('created_at', 'desc')->get();
      return Inertia::render('Event/Index', [
        'event' => $event->load('event','event.event_facility', 'event.event_facility.facility', 'event.event_participant', 'event.event_participant.user'),
      ]);
    }
    
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

    DB::transaction(
      function () use ($request) {
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
            'email' => $participant['email'],
            'name' => $participant['name'],
          ]);
          // $mailData =
          //   [
          //     'body' => 'Kamu telah terdaftar pada kegiatan ' . $request->name . '.',
          //     'date' => 'Waktu : ' . Carbon::parse($request->date_time_start),
          //     'location' => 'Lokasi : ' . $request->location,
          //     'confirm' => 'Lakukan konfirmasi kehadiran pada link dibawah ini.',
          //     'thanks' => 'Terima Kasih',
          //     'actionText' => 'Buka Web Manajemen Kegiatan Untuk Melihat Detail',
          //     'actionURL' => url('/'),
          //   ];
          // Notification::route('mail', $participant['email'])->notify(new EventNotification($mailData));
        }

        foreach ($request->facilities as $facility) {
          $eventFacility = event_facility::create([
            'event_id' => $event->id,
            'facility_id' => $facility['id'],
            'quantity' => $facility['quantity'],
            'status' => 'Pending',
          ]);
        }
        $mailData =
          [
            'body' => 'Kamu telah terdaftar pada kegiatan ' . $request->name . '.',
            'date' => 'Waktu : ' . Carbon::parse($request->date_time_start),
            'location' => 'Lokasi : ' . $request->location,
            'confirm' => 'Lakukan konfirmasi kehadiran pada link dibawah ini.',
            'thanks' => 'Terima Kasih',
            'actionText' => 'Buka Web Manajemen Kegiatan Untuk Melihat Detail',
            'actionURL' => url('/'),
          ];
        $participants = event_participant::where('event_id', $event->id)->get();
        // $participants->notify(new EventNotification($mailData));
        Notification::send($participants, new EventNotification($mailData));
      }
    );

    // $mailData =
    //   [
    //     'greeting' => 'Hi ' . $request->name . ',',
    //     'body' => 'Kamu telah terdaftar pada kegiatan ' . $request->participants[0]['name'] . ' pada tanggal ' . $request->date_time_start . 'di ' . $request->location . '.',
    //     'result' => 'Lakukan konfirmasi kehadiran pada link dibawah ini.',
    //     'thanks' => 'Terima Kasih',
    //     'actionText' => 'Buka Web Manajemen Kegiatan Untuk Melihat Detail',
    //     'actionURL' => url('/'),
    //   ];
    // $participant = User::where('id', $request->participants[0]['id'])->first();
    // $participant->notify(new EventNotification($mailData));

    return to_route('admin.event.index')->with('status', 'Event created.');
  }

  /**
   * Display the specified resource.
   */
  public function show(Event $event)
  {
    //
    // dd($event->load('event_participant', 'event_facility', 'event_participant.user', 'event_facility.facility'));
    return Inertia::render('Event/Detail',[
      'event' => $event->load('event_participant', 'event_facility', 'event_participant.user', 'event_facility.facility'),
    ]);
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
    $request->validate([
      'name' => 'required',
      'date_time_start' => 'required',
      'participants' => 'required',
    ]);

    DB::transaction(
      function () use ($request, $event) {
        $event->update([
          'name' => $request->name,
          'date_time_start' => Carbon::parse($request->date_time_start),
          'date_time_end' => Carbon::parse($request->date_time_end),
          'location' => $request->location,
        ]);

        $event->event_participant()->delete();
        foreach ($request->participants as $participant) {
          $eventParticipant = event_participant::create([
            'event_id' => $event->id,
            'user_id' => $participant['id'],
          ]);
        }

        $event->event_facility()->delete();
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

    return to_route('admin.event.index')->with('status', 'Event updated.');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Event $event)
  {
    //
    $event->event_facility()->delete();
    $event->event_participant()->delete();
    $event->delete();
    return to_route('admin.event.index')->with('status', 'Event deleted.');
  }
}
