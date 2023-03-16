import { Route, Routes } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import Infos from './components/Infos';
import Error from './components/Error';

function App() {
  /*   const [currentCategory, setCurrentCategory] = useState("")
    const [currentId, setCurrentId] = useState(0)
    const getCategory = (category) => {
      setCurrentCategory(category)
    }
    const getId = (id) => {
      setCurrentId(id)
    } */
  return (
    <div className="App container">
      <Search />
      <Routes>
        {/* <Route path="/" element={<Search />} /> */}
        <Route path="/:category/:id" element={<Infos />} />
        <Route path="*" element={<div className='text-center'><p>❌ These aren't the droids you're looking for!!</p><Error /></div>} />
      </Routes>
    </div>
  );
}

export default App;
