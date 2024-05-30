import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

function useBreadcrumbs() {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const { pathname } = useLocation();

  useEffect(() => {
    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    const breadcrumbsArray = pathSegments.map((segment, index) => ({
      path: `/${pathSegments.slice(0, index + 1).join('/')}`,
      label: segment.charAt(0).toUpperCase() + segment.slice(1)
    }));
    setBreadcrumbs(breadcrumbsArray);
  }, [pathname]);

  return breadcrumbs;
}

function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.path}>
          <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
          {index < breadcrumbs.length - 1 && ' / '}
        </span>
      ))}
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Breadcrumbs />
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <Breadcrumbs />
    </div>
  );
}

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Breadcrumbs />
      <ul>
        <li><Link to="/products/1">Product 1</Link></li>
        <li><Link to="/products/2">Product 2</Link></li>
      </ul>
    </div>
  );
}

function ProductDetails() {
  return (
    <div>
      <h1>Product Details</h1>
      <Breadcrumbs />
    </div>
  );
}

export default App;