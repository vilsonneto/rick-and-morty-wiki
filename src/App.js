import "./App.css";
import { useState, useEffect } from "react";
import { Characters } from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [page]);

  const prevPage = () => {
    page > 1 && setPage(page - 1);
  };

  const nextPage = () => {
    page < 35 && setPage(page + 1);
  };

  return (
    <div className="App">
      <div className="App-header">
        <Characters characterList={characterList} />
        <div className="Nav-characters">
          <button onClick={prevPage}>Prev</button>
          <button onClick={nextPage}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
