
// import reactLogo from './assets/react.svg'

import './App.css'
import Banner from './component/Banner'
import NavBar from './component/NavBar'
import CountDown from './component/CountDown';
import Models from './component/Models';

const getModels = async () =>{
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()


function App() {


  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <CountDown></CountDown>

      <Models modelPromise = {modelPromise}></Models>
      
    </>
  )
}

export default App
