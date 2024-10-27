import { useEffect, useRef } from "react";

export default function RefComponent() {
  // ref used to trigger animations
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    console.log("REF: ", inputRef.current);
  }, []);

  return (
    <div>
      <input ref={inputRef} name="something" placeholder="Enter something" />
    </div>
  );
}
