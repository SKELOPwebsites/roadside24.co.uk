<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoveredAreas extends Model
{
    use HasFactory;

    protected $table = 'covered_areas';

    public $timestamps = false;

    protected $guarded = [];
}
