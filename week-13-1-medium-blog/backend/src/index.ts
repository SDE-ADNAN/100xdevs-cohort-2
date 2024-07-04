import { Hono } from 'hono';
import userRouter from './routes/user';
import blogRouter from './routes/blog';

// this below line is required to let hono know that we have a key named DATABASE_URL which must be a string
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>();

// app.get("/",(c,next)=>{
//   next()
//   return c.text("hello world")
// })

app.route('/api/v1/user',userRouter);
app.route('/api/v1/blog',blogRouter);

export default app