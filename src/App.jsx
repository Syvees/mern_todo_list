import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Display from './components/Display'

function App() {
  const [list, setList] = useState ([])
  return (
    <>
      <Form list={list} setList={setList}/> 
      <Display list={list} setList={setList}/>
    </>
  )
}

export default App
