<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Casts\Attribute;

class event_participant extends Model
{
  use HasFactory;

  protected $fillable = [
    'event_id',
    'user_id',
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
