import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={'Bienvenido a la tienda virtual'}/>
    </>
  );
}

export default App;