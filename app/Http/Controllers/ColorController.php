<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Color;

class ColorController extends Controller
{
    // Returns a json list of colors
    // optional $GET['limit'] and $GET['order'] params
    public function index(Request $request)
    {

      $colors = Color::when($request['limit'], function($q, $limit){
        return $q->limit($limit);
      })->when($request['order'], function($q, $order){
        if($order == 'random')
          return $q->inRandomOrder();
        else
          return $q->orderBy($order, 'DESC');
      })->get();

      return $colors->toJson();
    }

    // Endpoint for submiting vote
    public function vote(Request $request)
    {
      $color = Color::find($request['color']);
      $color->wins++;
      $color->save();
    }
}
