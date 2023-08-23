<?php

namespace App\Http\Controllers;

use App\Models\facility;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FacilityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $facilities = facility::all();
        return Inertia::render('Facility/Index', [
            'facilities' => $facilities,
            'status' => session('status'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Facility/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'name' => 'required',
            'total_amount' => 'required',
        ]);

        $facility = facility::create([
            'name' => $request->name,
            'total_amount' => $request->total_amount,
        ]);

        return to_route('admin.facility.index')->with('status', 'Facility created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(facility $facility)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(facility $facility)
    {
        //
        return Inertia::render('Facility/Edit', [
            'facility' => $facility,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, facility $facility)
    {
        //
        $request->validate([
            'name' => 'required',
            'total_amount' => 'required',
        ]);

        $facility->update([
            'name' => $request->name,
            'total_amount' => $request->total_amount,
        ]);

        return to_route('admin.facility.index')->with('status', 'Facility updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(facility $facility)
    {
        //
        $facility->delete();
        return to_route('admin.facility.index')->with('status', 'Facility deleted.');
    }
}
