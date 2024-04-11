<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // public function up(): void
    // {
    //     Schema::create('followers', function (Blueprint $t) {
    //         $t->id("follower_id");
    //         $t->unsignedBigInteger("user_id");
    //         $t->foreign("user_id")->references("id")->on("users")->onDelete('cascade');
    //         $t->timestamps();
    //         $t->unique(['user_id', 'follower_id']);
    //     });
    // }

    public function up(): void
    {
        Schema::create('followers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('followers');
    }
};
