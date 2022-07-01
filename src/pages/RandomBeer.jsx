import { useState } from "react";

function RandomBeers() {
  const [Random, setRandom] = useState(null);

  return (
    <div>
      <h1>Random Beer</h1>
      {Random ? "" : <p>Loading...</p>}
    </div>
  );
}

export default RandomBeers;
