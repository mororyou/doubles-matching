import { useLoaderData } from '@remix-run/react';
import { hc } from 'hono/client';
import { AppType } from 'server';

const client = hc<AppType>(import.meta.env.VITE_API_URL);

export const loader = async () => {
  const res = await client.api.todos.$get();
  return res.json();
};

export default function Todos() {
  const todos = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-col">
      Todos
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center">
          <span>{todo.text}</span>
        </div>
      ))}
    </div>
  );
}
