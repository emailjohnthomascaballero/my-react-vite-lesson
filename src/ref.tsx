import { useEffect, useRef } from "react";

export default function RefComponent() {
  // ref used to trigger animations and best partner of useEffect
  // the same code of document.querySelector("[name='something']")
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // add ?.name or ?.placeholder 
    console.log("REF: ", inputRef.current?.placeholder);
  }, []);

  return (
    <div>
      <input ref={inputRef} name="something" placeholder="Enter something" />
    </div>
  );
}
