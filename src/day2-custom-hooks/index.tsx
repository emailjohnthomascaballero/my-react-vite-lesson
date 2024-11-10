import { useEffect, useState } from "react";

type Post = {
  id: number,
  title: string,
  body: string
}

// the custom hook is the useFetchData function and encapsulates logic that can be reused across components
export function useFetchData() {
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

  return data;
}

export function Day2MainComponent() {

  // useFetchData hook is called like this
  const data = useFetchData();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}