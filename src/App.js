import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import About from './component/About/About';

function App() {
  return (
    //* adding all route and header *//
    
    <div className="App">
     <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/about' element={<About></About>}></Route>
     </Routes>
    </div>
  );
}

export default App;
