import { useState, useEffect } from 'react'
import './App.css'
import HomePage from './pages/HomePage';
import LoadingPage from './pages/LoadingPage'


function App() {
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
      <HomePage />
    </div>
  )
}

export default App
