 import { Navbar } from './component/Navbar';
import './App.css';
import { AuthContextProvider } from './context/Authcontext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
       <Navbar/>
       </AuthContextProvider>
    </div>
  );
}

export default App;
