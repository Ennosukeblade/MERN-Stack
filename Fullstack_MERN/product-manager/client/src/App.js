import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/ProductDetails';
import Main from './views/Main';

function App() {
  return (
    <div className="App container pt-5">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
