<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class EventFacilityTest extends TestCase
{
  /**
   * A basic feature test example.
   */
  public function test_update(): void
  {
    $response = $this->get('/login');

    $response->assertStatus(200);
  }
}
