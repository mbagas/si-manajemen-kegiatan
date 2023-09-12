<?php

namespace App\Http\Controllers;

use App\Models\event_facility;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EventFacilityController extends Controller
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
    public function show(event_facility $event_facility)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(event_facility $event_facility)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, event_facility $event_facility)
    {
        //
        $event_facility->update([
          'status' => $request['status'],
        ]);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(event_facility $event_facility)
    {
        //
    }
}
