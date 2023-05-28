import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home"
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />}></Route>
        <Route path="/hotels" element={ <List />}></Route>
        <Route path="/hotels/:id" element={ <Hotel />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
