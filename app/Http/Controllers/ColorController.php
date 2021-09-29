<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Color;

class ColorController extends Controller
{
    public function index(Request $request)
    {
      if($request->has('limit'))
        $colors = Color::limit($request['limit'])->orderby('wins')->get();
      else
        $colors = Color::orderby('wins')->get();

      return $colors->toJson();
    }
}
