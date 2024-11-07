// useEffect Lesson

import { useEffect } from 'react'

export default function TestComponent() {

  useEffect(() => {
    console.log(`I am from test component`)
  }, []);

  return (
    <div>
      Test Component
    </div>
  )
}