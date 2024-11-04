import { useState } from 'hono/jsx';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div class="text-center">
      <p class="text-red-500">{count}</p>
      <button class="h-10 outline-none border rounded-md px-6 hover:bg-neutral-50" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}