import React from 'react';
import { Recycle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Recycle className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Swap Store</span>
            </div>
            <div className="flex space-x-4">
              <a href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Featured Items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Clothing Items */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105"
              alt="Vintage Denim Jacket"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">Vintage Denim Jacket</h2>
              <p className="text-gray-600 mt-1">Classic style, perfect condition</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3"
              alt="Summer Dress"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">Floral Summer Dress</h2>
              <p className="text-gray-600 mt-1">Light and breezy</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea"
              alt="Leather Jacket"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">Classic Leather Jacket</h2>
              <p className="text-gray-600 mt-1">Timeless piece</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;