import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TaksForm } from './components/TaskForm/TaksForm';
import { TaksList } from './components/TaskList/TaksList';
import './App.css'

function App() {

  return (
    <div className="bg-zing-900 h-screen text-white">
      <div className='flex items-center justify-center h-full'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TaksList />}/>
            <Route path='/create-task' element={<TaksForm />}/>
            <Route path='/edit-task/:id' element={<TaksForm />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
