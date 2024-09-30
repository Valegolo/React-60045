import './App.css';
import ItemListContainer from './components/ItemList';
import NavBartest from './components/navBartest';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeView from './views/Homeview';
import SkincareView from './Views/SkincareView';
import MaquillajeView from './Views/MaquillajeView';
import CabelloView from './Views/CabelloView';


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBartest />
      <Routes>
        <Route exact path = '/Home' element ={<HomeView />} /> 
        <Route exact path = '/Skincare' element ={<SkincareView />} />
        <Route exact path = '/Maquillaje' element = {<MaquillajeView />} />
        <Route exact path = '/Cabello' element = {<CabelloView />} />
      </Routes>
      <ItemListContainer greeting='Bienvenido a mi Tienda!'/>
      </BrowserRouter>
    </>
  );
}

export default App;
