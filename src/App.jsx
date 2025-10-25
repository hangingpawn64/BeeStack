import { useState, useEffect } from 'react'
import './App.css'
import LoadingPage from './assets/LoadingPage'
import Navbar from './assets/Navbar'

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5 seconds

    return () => clearTimeout(timer); // cleanup just in case
  }, []);

  return (
    <>
      {isLoading ? <LoadingPage /> : <Navbar />}
    </>
  )
}

export default App
