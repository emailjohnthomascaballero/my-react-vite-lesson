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

  return (
    <div>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.name} - {game.difficulty}
          </li>
        ))}
      </ul>
    </div>
  );
}
