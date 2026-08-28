<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\RedirectResponse;

class ProductController extends Controller
{
    public function index()
    {
        $products = Products::all();
        // dd($products);
        return Inertia::render('Products/Index', [
            'allProducts'=> $products,
        ]);
    }
    public function create()
    {
        return Inertia::render('Products/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'price' => ['required', 'numeric', 'decimal:0,2', 'min:0'],
            'description' => 'nullable|string'
        ]);

        Products::create($data);

        return redirect()->route('products.index')->with('message', 'Product Created Scuccessfully!');
    }

}
