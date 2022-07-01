import { useState, useEffect } from "react";
import axios from "axios";

function Beers() {
  const [beers, setBeers] = useState(null);
  useEffect(() => {
    const fetchBeers = async () => {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response);
    };
    fetchBeers();
  }, []);

  return (
    <div>
      <h1>Beers</h1>
      {beers ? "" : <p>Loading...</p>}
    </div>
  );
}

export default Beers;
