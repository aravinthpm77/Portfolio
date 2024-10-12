
import './App.css'
// import { ThreeDCardDemo } from './components/ui/3d-cardEffect/3d-cardcomponent'
// import { AuroraBackgroundDemo } from './components/ui/Aurora-background/aurora-background-Components'
// import Navbar from './components/navbar/navbar';
import Router from './router'
import {BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  

  return (
    <>
      <BrowserRouter>
          <Router/>          
      </BrowserRouter>
      
    </>
  )
}

export default App
