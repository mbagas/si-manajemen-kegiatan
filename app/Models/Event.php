<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
      'name',
      'date_time_start',
      'date_time_end',
      'notulensi',
      'location'
    ];

    public function event_participant(): HasMany
    {
      return $this->hasMany(event_participant::class, 'event_id');
    }

    public function event_facility(): HasMany
    {
      return $this->hasMany(event_facility::class, 'event_id');
    }

  protected function notulensi(): Attribute
  {
    return Attribute::make(
      get: fn ($value) => [url('notulensi/' . $value), $value],
    );
  }
}
