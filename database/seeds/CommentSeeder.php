<?php

use Illuminate\Database\Seeder;
use App\Comment;

class CommentSeeder extends Seeder
{
    /**
     * Create 4k random comments and assign each to random color
     *
     * @return void
     */
    public function run()
    {
        factory(Comment::class, 4000)->create();
    }
}
