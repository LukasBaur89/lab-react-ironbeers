import { useState } from "react";

function NewBeer() {
  const [newBeer, setNewBeer] = useState(null);

  return (
    <div>
      <h1>New Beer</h1>
      {newBeer ? "" : <p>Loading...</p>}
    </div>
  );
}

export default NewBeer;
