<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Facility extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'total_amount'
    ];

    public function event_facility()
    {
      return $this->hasMany(event_facility::class, 'facility_id');
    }

    protected function image(): Attribute
    {
      return Attribute::make(
        get: fn ($value) => [url('facility/'.$value), $value],
      );
    }

}
