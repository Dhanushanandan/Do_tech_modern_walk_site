import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CategoryPage from './components/CategoryPage';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Show Navbar only if not on landing page */}
      {!isLandingPage && (
        <nav className="flex justify-between items-center bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 p-4 rounded-lg shadow-md mb-6">
          <Link to="/" className="flex items-center space-x-3">
            {/* Logo Image */}
            <img
              src="/Logo.png"
              alt="Logo"
              className="w-10 h-10 rounded-full shadow-sm object-contain"
            />
            <span className="text-black text-3xl font-semibold hover:underline">Modern Walk</span>
          </Link>
          <div className="space-x-4">
            <Link to="/category/men's clothing" className="text-black hover:underline">Men's Clothing</Link>
            <Link to="/category/women's clothing" className="text-black hover:underline">Women's Clothing</Link>
          </div>
        </nav>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>

      {/* Footer */}
      <footer className="mt-8 py-6 text-center from-blue-50 via-blue-100 to-indigo-200 text-black">
        <p>&copy; 2025 Modern Walk. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
