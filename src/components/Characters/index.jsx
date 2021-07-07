import "./style.css";
import { CharCard } from "../CharCards";

export const Characters = ({ characterList }) => {
  return (
    <div className="Characters">
      <h1>Meus personagens</h1>
      {characterList.map((character) => {
        return <CharCard key={character.id} character={character} />;
      })}
    </div>
  );
};
