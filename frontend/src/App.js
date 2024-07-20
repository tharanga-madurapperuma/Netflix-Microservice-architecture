import Login from './Containers/Account/login.js';
import Home from './Containers/Home/Home.js';
import SignUp from './Containers/Account/signup.js';
import Movie from './Containers/Movie/movie.js';
import TVSeries from './Containers/TVSeries/tvSeries.js';
import Docs from './Containers/Docs/doc.js';
import Trailer from './Components/Trailer/trailer.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/movies' element={<Movie/>}/>
          <Route path='/series' element={<TVSeries/>}/>
          <Route path="/docs" element={<Docs/>}/>
          <Route path='/trailer' element={<Trailer/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
