import { useLoaderData } from '@remix-run/react';
import { apiClient } from '~/libs/rpc';

export const loader = async () => {
  const res = await apiClient.api.todos.$get();
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
