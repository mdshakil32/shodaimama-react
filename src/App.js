import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="cart" element={<Cart /> } />
        </Routes>
      </BrowserRouter>

      {/* <Home></Home> */}
    </div>
  );
}

export default App;
