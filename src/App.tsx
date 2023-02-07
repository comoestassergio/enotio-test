import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './containers/Main/Main'
import TaskGroup from './containers/TaskGroup/TaskGroup'
import './styles/App.scss'

function App() {

  return (
    <div className="App">
      <Header />
      <Main>
        <TaskGroup open />
        <TaskGroup />
      </Main>
    </div>
  )
}

export default App
