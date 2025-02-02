import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">E-Commerce Store</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Example product cards */}
            <div className="bg-white p-4 rounded shadow">
              <img src="https://via.placeholder.com/150" alt="Product 1" className="w-full h-48 object-cover rounded" />
              <h3 className="mt-2 text-lg font-bold text-gray-900">Product 1</h3>
              <p className="mt-1 text-gray-600">$19.99</p>
              <button className="mt-4 w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add to Cart
              </button>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="https://via.placeholder.com/150" alt="Product 2" className="w-full h-48 object-cover rounded" />
              <h3 className="mt-2 text-lg font-bold text-gray-900">Product 2</h3>
              <p className="mt-1 text-gray-600">$29.99</p>
              <button className="mt-4 w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add to Cart
              </button>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="https://via.placeholder.com/150" alt="Product 3" className="w-full h-48 object-cover rounded" />
              <h3 className="mt-2 text-lg font-bold text-gray-900">Product 3</h3>
              <p className="mt-1 text-gray-600">$39.99</p>
              <button className="mt-4 w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add to Cart
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}