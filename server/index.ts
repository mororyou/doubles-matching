import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { dummyTodos } from './demo/todos';

const app = new Hono();

app.use(
  '*',
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
    exposeHeaders: ['Content-Length'],
    maxAge: 600,
  }),
);

const routes = app.get('/api/todos', (c) => {
  return c.json(dummyTodos);
});

export default app;

export type AppType = typeof routes;
