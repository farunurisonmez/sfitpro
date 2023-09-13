<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use App\Listeners\HandleControllerCreated;
use Illuminate\Support\Facades\Log;
use App\Events\ControllerCreatedEvent;
class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            // ...
        ],
        ControllerCreatedEvent::class => [
            HandleControllerCreated::class,
        ],
    ];


    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        parent::boot();
        Log::info("EVENT SERVİCE PROVİDER");
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        echo "1";
        return false;
    }
}
