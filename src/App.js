
import './App.css';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import Watch_history from './Pages/Watch_history';
import { Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MoreCategory from './Components/MoreCategory';

function App() {
  return (
    <div className="App">
    
     <Header />
     <Routes>

    <Route path='/' element={ <LandingPage />} ></Route>
    <Route path='/home' element={ <Home />} ></Route>
    <Route path='/watch_history' element={ <Watch_history />} ></Route>
    <Route path='/morecategory' element={<MoreCategory/>}></Route>

     </Routes>
     <Footer />

    
    
     
     
    </div>
  );
}

export default App;
