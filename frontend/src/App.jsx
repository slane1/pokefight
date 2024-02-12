import { useState, useContext } from 'react'
import { DataContext } from './contexts/DataContext.jsx'
import './App.css'
import ListView from './components/ListView.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)
  const {api, setApi} = useContext(DataContext);
  
  return (
    <div>
      <Header />
      <ListView />
      <Footer />
    </div>
  )
}

export default App
