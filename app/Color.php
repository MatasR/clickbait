<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Comment;

class Color extends Model
{
    public function comments()
    {
      return $this->hasMany(Comment::class);
    }
}
