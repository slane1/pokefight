import { useState, useContext } from 'react'
import { DataContext } from './contexts/DataContext.jsx'
import './App.css'
import ListView from './components/ListView.jsx'

function App() {
  const [count, setCount] = useState(0)
  const {api, setApi} = useContext(DataContext);
  
  return (
    <div>
      <ListView />
    </div>
  )
}

export default App
