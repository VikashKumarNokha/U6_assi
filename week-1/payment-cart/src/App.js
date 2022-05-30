
import './App.css';
import {Payment}  from "./component/payment";

function App() {
    var data = [
        {
          Image: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
          date: "13/11/1998",
          name: "Amazon Gift",
          payment : "Pay",
          details:"Desktop - Mobile",
          backcolor: "bisque",
        },
        {
          Image: "https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png",
          date: "17 Sep 2020",
          name: "Amazon Gift",
          payment : "Payment",
          details:"macOS - Mobile",
          backcolor: "red",
        }
    ]
  return (
    <div className="App">
      {
        data.map((e,i)=>(
          <Payment  Details={data[i]}/>
        ))
      }
        
    </div>
  );
}
 
export default App;
