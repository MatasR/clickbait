<?php

namespace App\Http\Controllers;

use App\Color;
use App\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    // List all comments of color
    public function index(Color $color)
    {
        $comments = $color->comments;

        return $comments->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    // Store a newly created comment
    public function store(Request $request)
    {
        $comment = new Comment;
        $comment->color_id = $request->color;
        $comment->text = $request->text;
        $comment->save();

        // Return new comment to react so he could add to its comments list
        return $comment->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        $comment->delete();
    }
}
