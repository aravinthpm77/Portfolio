
import { Route,Routes } from "react-router-dom";
import Home from './page/home/home';
import Resume from "./page/Resume/Resume";
const AllRouter=()=> {
  return (
    <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route path='/resume' element={<Resume/>}/>
    </Routes>
  )
}

export default AllRouter