<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Color;

class ColorController extends Controller
{
    public function index()
    {
      $colors = Color::get();

      return $colors->toJson();
    }
}
