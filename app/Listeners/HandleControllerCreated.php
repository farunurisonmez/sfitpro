<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Events\ControllerCreatedEvent;
use Illuminate\Support\Facades\Log;


class HandleControllerCreated
{
    /**
     * Create the event listener.
     */
    public function handle(ControllerCreatedEvent $event)
    {
        $controllerName = $event->controllerName;
        Log::info("Controller Created: $controllerName");
    }

    /**
     * Handle the event.
     */
    protected $listen = [
        Registered::class => [
            // ...
        ],
        ControllerCreatedEvent::class => [
            HandleControllerCreated::class,
        ],
    ];

}
