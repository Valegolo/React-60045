import './App.css';
import ItemListContainer from './components/ItemList';
import NavBartest from './components/navBartest';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeView from './views/Homeview';
import SkincareView from './Views/SkincareView';
import MaquillajeView from './Views/MaquillajeView';
import CabelloView from './Views/CabelloView';
import ProductView from './Views/ProductView/ProductView';


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBartest />
      <Routes>
        <Route exact path = '/Home' element ={<HomeView />} /> 
        <Route exact path = '/category/:categoryId' element ={<SkincareView />} />
        <Route exact path="/:category/:id" element={<ProductView />} />
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
