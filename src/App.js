import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeers";
import Homepage from "./pages/Homepage/Homepage";
import Navigation from "./components/Navigation/Navigation";

function App({ hideLink }) {
  const location = useLocation();
  return (
    <div className="App">
      <Navigation hideLink={location?.pathname === "/"}></Navigation>
      <Routes>
        <Route path="/" element={<Homepage navLink></Homepage>}></Route>
        <Route path="/beers" element={<Beers></Beers>}></Route>
        <Route path="/random-beer" element={<RandomBeer></RandomBeer>}></Route>
        <Route path="/new-beer" element={<NewBeer></NewBeer>}></Route>
      </Routes>
    </div>
  );
}

export default App;
