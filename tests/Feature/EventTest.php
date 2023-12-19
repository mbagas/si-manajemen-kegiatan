<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class EventTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
    }
    
    public function test_example1(): void
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
    }
    public function test_example2(): void
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
    }
    public function test_example3(): void
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
    }
}
