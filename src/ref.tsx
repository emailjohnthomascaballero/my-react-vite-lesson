import { useEffect, useRef } from "react";

export default function RefComponent() {
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
