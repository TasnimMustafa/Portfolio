import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Nav from './components/Navbar/Nav';
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import {Routes,Route} from 'react-router-dom';
import AllProjects from "./components/Projects/All-Projects";
import FrontProjects from "./components/Projects/front-projects";
import BackProjects from "./components/Projects/back-projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {


  return (
    <div className="App">
       <Nav/>
       <Home/>
       <Skills/>
       <Projects/>

       <Routes>
           <Route>
               <Route path='Portfolio' element={<AllProjects/>}/>
               <Route path='front' element={<FrontProjects/>}/>
               <Route path='back' element={<BackProjects/>}/>
           </Route>
       </Routes>
        <Contact/>
        <Footer/>


    </div>
  );
}

export default App;
