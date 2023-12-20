<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     */
  public function test_index(): void
  {
    $response = $this->get('/login');

    $response->assertStatus(200);
  }

  public function test_create(): void
  {
    $response = $this->get('/login');

    $response->assertStatus(200);
  }

  public function test_store(): void
  {
    $response = $this->get('/login');

    $response->assertStatus(200);
  }

  public function test_edit(): void
  {
    $response = $this->get('/login');

    $response->assertStatus(200);
  }

  public function test_update(): void
  {
    $response = $this->get('/login');

    $response->assertStatus(200);
  }
  
  public function test_destroy(): void
  {
    $response = $this->get('/login');

    $response->assertStatus(200);
  }
 
}
