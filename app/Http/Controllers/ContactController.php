<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function store(ContactRequest $request)
    {
        $details = $request->validated();

        Mail::to(config('mail.from.address'))->send(new ContactMail($details));

        return Redirect::to('/contact')->with('success', 'yes');
    }
}
