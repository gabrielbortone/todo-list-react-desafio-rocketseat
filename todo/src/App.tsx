import { useState } from 'react'
import './App.scss'
import { Header } from './components/Header'
import TaskCreate from './components/TaskCreate'
import GridTodo from './components/GridTodo'

function App() {
  return (
    <div className="App">
      <Header />
      <TaskCreate />
      <GridTodo />
    </div>
  )
}

export default App
