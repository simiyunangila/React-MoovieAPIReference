// import logo from './logo.svg';
import './App.css';
import NavigationBar from './Navigation';
import MovieSlider from './Components/GetMovies/slider/productSlider';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import GetMovies from './Components/GetMovies';

function App() {
  return (
    <div>
    <NavigationBar/>
    <MovieSlider/>
    <GetMovies/>
      <BrowserRouter>
      <Routes>
        {/* <Route index element={<Login/>}/> */}
        <Route path='/home' element={<GetMovies/>}/>
        {/* <Route path='/product' element={<Products/>}/>
        <Route path='/productdetails/:productId' element={<Productdetails/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
