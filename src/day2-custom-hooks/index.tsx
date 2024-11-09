import { useEffect, useState } from "react";

// useCounter is the custom hook
// function useCounter() {
//   const [count, setCount] = useState(0);
//   return { count, setCount };
// }

type Post = {
  id: number,
  title: string,
  body: string
}

export function Day2MainComponent() {
  // const { count, setCount } = useCounter();

  const [data , setData] = useState<Post[]>([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setData(data);
  }

  // first render will fetch the data
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button> */}

      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}