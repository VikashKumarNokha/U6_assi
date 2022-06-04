  import {Route,Routes} from "react-router-dom";
  import {Home} from "./component/Home";
  import {Products} from "./component/products";
  import { Navbar } from "./component/Navbar";
  import { ProductDetails } from "./component/PoductDetails";
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/product" element={<Products/>}/>
         <Route path="/product/:id" element={<ProductDetails/>}/>
        </Routes>
      </div>
  );
    
}

export default App;
