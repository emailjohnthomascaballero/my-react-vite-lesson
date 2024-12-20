import React, { useCallback, useMemo } from "react";
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

  // useCallback() helps optimize performance (but first convert your function into arrow function) (this is always partner of React.memo())
  // only use this if you have React.memo() in your component

  const handleClickShuffle = useCallback(() => {
    setGames(prevGames => [...prevGames].sort(() => Math.random() - 0.5));
    // setGames([...games].sort(() => Math.random() - 0.5));
  }, [])

  // previous code but not optimized:
  // const handleClickShuffle = useCallback(() => {
  //   setGames([...games].sort(() => Math.random() - 0.5));
  // }, [])

  // useMemo() will prevent unnecessary re-renders
  const totalValue = useMemo(() => {
    console.log("calculating total value...")
    return games.length;
  }, [])

  return (
    <div>
      <div>Total Value: {totalValue}</div>
      <TestButton onClick={handleClickShuffle} />
      <ShuffleButton onClick={handleClickShuffle} />
      <ListGames games={games} />
    </div>
  );
}

// TestButton not optimized because it has no React.memo()
const TestButton = ({onClick}: {onClick: () => void}) => {
  return (
      <button onClick={onClick}>test</button>
  );
};

// React.memo() will prevent unnecessary re-renders (but first convert your function into arrow function) (this is always partner of useCallback())
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