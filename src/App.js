import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Review from './components/Review/Review';
import About from '../src/components/About/About';


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
      <Route path='/review' element={<Review></Review>}></Route>
     </Routes>
    </div>
  );
}

export default App;
