<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class event_facility extends Model
{
    use HasFactory;

    protected $fillable = [
      'quantity',
      'status',
      'event_id',
      'facility_id'
    ];

    public function event(): BelongsTo
    {
      return $this->belongsTo(Event::class, 'event_id');
    }

    public function facility(): BelongsTo
    {
      return $this->belongsTo(Facility::class, 'facility_id');
    }
}
