 import {Mobile} from "./component/mobile";
 import { MMobile } from "./component/mmobile";
import './App.css';

function App() {
     var  M = ["Android","Blackberry","iPhone","Window Phone"];
     var m = ["Samsug","HTC","Micromax","Apple"];
  return (
    <div className="App">
     <Mobile Key ={M}/>
     <MMobile p= {m}/>
    </div>
  );
}

export default App;
