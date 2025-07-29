import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();

  // Ana sayfada breadcrumb gösterme
  if (location.pathname === '/') {
    return null;
  }

  // Breadcrumb öğeleri
  const breadcrumbs = [{ path: '/', label: 'Ana Sayfa' }];
  
  if (location.pathname.startsWith('/products')) {
    breadcrumbs.push({ path: '/products', label: 'Ürünler' });
  } else {
    const pageLabel = location.pathname.replace('/', '').charAt(0).toUpperCase() + location.pathname.slice(2);
    breadcrumbs.push({ path: location.pathname, label: pageLabel });
  }

  return (
    <nav className="text-sm text-gray-600 mt-2">
      {breadcrumbs.map((crumb, index) => (
        <span key={crumb.path}>
          {index < breadcrumbs.length - 1 ? (
            <>
              <Link to={crumb.path} className="hover:underline">
                {crumb.label}
              </Link>
              <span className="mx-2">/</span>
            </>
          ) : (
            <span>{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;