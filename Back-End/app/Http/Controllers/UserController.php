<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Exception;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $users = User::all();
            return response()->json($users, 200);
        } catch (\Exception $ex){
            return response()->json([
                'message' => 'Users not found!'
            ], 404);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();

        try {
            $user = new User();
            $user->fill($data);
            $user->password = Hash::make(123);
            $user->save();

            return response()->json($user, 201);
        } catch (\Exception $ex){
            return response()->json([
                'message' => 'Insert fail!'
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $user = User::findOrFail($id);
            return response()->json($user, 200);
        } catch (\Exception $ex){
            return response()->json([
                'message' => 'User not found!'
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, string $id)
    {
        $data = $request->validated();

        try {
            $user = User::findOrFail($id);

            if (isset($data['password'])) {
                $data['password'] = Hash::make($data['password']);
            }

            $user->update($data);
            return response()->json($user, 200);

        } catch (\Exception $ex){
            return response()->json([
                'error' => $ex->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $userRemoved = User::destroy($id);
            if (!$userRemoved) {
                throw new Exception();
            }
            return response()->json(null, 204);

        } catch (\Exception $ex){
            return response()->json([
                'message' => 'Error to destroy user!'
            ], 400);
        }
    }
}
