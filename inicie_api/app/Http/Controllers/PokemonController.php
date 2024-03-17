<?php

namespace App\Http\Controllers;

use App\Response\ApiResponse;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PokemonController extends Controller
{
    public function index(Request $request){
        try{
            $limit = $request->limit ?? 20;
            $page = $request->page ?? 0;

            $response = Http::get("https://pokeapi.co/api/v2/pokemon?limit=$limit&offset=$page")->json();
            return ApiResponse::sendResponse($response);
        }catch(Exception $exception) {
            return ApiResponse::sendError($exception);
        }
    }

    public function show(Request $request, $id){
        try{
            $response = Http::get("https://pokeapi.co/api/v2/pokemon/$id")->json();
            return ApiResponse::sendResponse($response);
        }catch(Exception $exception) {
            return ApiResponse::sendError($exception);
        }
    }
}
