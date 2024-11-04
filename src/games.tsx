import React from "react";
import { useState } from "react";

export type Game = {
  id: number;
  name: "Dota2" | "CS:GO" | "League of Legends";
  difficulty: "Easy" | "Medium" | "Hard";
};

const GAMES_DATA = Array.from({ length: 300 }, (_, index) => {
  return {
    id: index + 1,
    name: index % 2 ? "Dota2" : "League of Legends",
    difficulty: index % 2 ? "Easy" : "Hard",
  } satisfies Game;
});

export default function GamesComponent() {
  const [games, setGames] = useState(GAMES_DATA);

  function handleClickShuffle() {
    setGames([...games].sort(() => Math.random() - 0.5));
  }

  return (
    <div>
      <ShuffleButton onClick={handleClickShuffle} />
      <ListGames games={games} />
    </div>
  );
}

// React.memo() will prevent unnecessary re-renders (but first convert your function into arrow function)
const ShuffleButton = React.memo(({onClick}: {onClick: () => void}) => {
  return (
    <div>
      <button onClick={onClick}>Shuffle</button>
    </div>
  );
});

// ListGames Component
export function ListGames({games}: {games: Game[]}) {
  return (
    <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.name} - {game.difficulty}
          </li>
        ))}
      </ul>
  );
}