import React from 'react';
import { Menu, X, Server } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Server className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">ServerHost</span>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
              Home
            </a>
            <a href="#features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Features
            </a>
            <a href="#contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Contact
            </a>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Home
            </a>
            <a href="#features" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50">
              Features
            </a>
            <a href="#contact" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}