import './App.css';
import '../components/App'
import Navbar from './pages/Navbar';
import Principal  from './pages/principal'
/*import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Principal from './pages/principal';
import SobreMi from './pages/SobreMi';*/


function App() {
  return (
<>
<Navbar/>
<Principal/>
</>
  );
}

export default App;

/*<BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="SobreMi/*" element={<SobreMi />} />
      </Routes>
    </BrowserRouter>*/