import './App.css';
import ItemListContainer from './components/ItemList';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='Bienvenido a mi Tienda!'/>
    </>
  );
}

export default App;
