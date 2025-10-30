import { useState, useEffect } from 'react'
import './App.css'
import HomePage from './pages/HomePage';
import LoadingPage from './pages/LoadingPage'
import OurWork from './pages/OurWork'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'

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
