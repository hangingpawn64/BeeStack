import { useState, useEffect } from 'react'
import './App.css'
import HomePage from './pages/HomePage';
import LoadingPage from './pages/LoadingPage'
import OurWork from './pages/OurWork'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Technique from './pages/Technique';
import Technology from './pages/Technology';
import Products from './pages/Products';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/our-work",
      element: <OurWork />,
    },
    {
      path: "/our-work/technique",
      element: <Technique />
    },
    {
      path: "/our-work/technology",
      element: <Technology />
    },
    {
      path: "/our-work/products",
      element: <Products />
    }
  ]);


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
