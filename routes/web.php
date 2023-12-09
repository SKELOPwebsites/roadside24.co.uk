<?php

use App\Http\Controllers\ContactController;
use App\Models\CoveredAreas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/mobile-tyre-fitting', function () {
    return Inertia::render('MobileTyreFitting');
});
Route::get('/mobile-tyre-repair', function () {
    return Inertia::render('MobileTyreRepair');
});
Route::get('/van-mobile-tyre-fitting', function () {
    return Inertia::render('VanMobileTyreFitting');
});
Route::get('/branded-tyres', function () {
    return Inertia::render('BrandedTyres');
});
Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
});

Route::get('/contact', function (Request $request) {
    return Inertia::render('ContactUs', [
        'success' => $request->session()->get('success')
    ]);
});
Route::post('/contact', [ContactController::class, 'store']);

Route::get('/coverage/{area:slug}', function (CoveredAreas $area) {
    return Inertia::render('Location', [
        'location' => ucwords($area->area),
        'slug' => $area->slug
    ]);
});
Route::get('/sitemap', function () {
    $areas = CoveredAreas::orderBy('slug', 'asc')->get()->toArray();

    return Inertia::render('Sitemap', [
        'areas' => $areas
    ]);
});
