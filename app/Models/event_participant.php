<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Notifications\Notifiable;
class event_participant extends Model
{
  use HasFactory;
  use Notifiable;
  
  protected $fillable = [
    'event_id',
    'user_id',
    'name',
    'email',
    'availability',
    'precense',
    'image',
  ];

  public function event(): BelongsTo
  {
    return $this->belongsTo(Event::class, 'event_id');
  }

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class, 'user_id');
  }

  protected function image(): Attribute
  {
    return Attribute::make(
      get: fn ($value) => [url('facility/' . $value), $value],
    );
  }
}
