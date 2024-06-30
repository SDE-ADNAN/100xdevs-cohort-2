import { Hono } from 'hono';
import {PrismaClient} from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';


// this below line is required to let hono know that we have a key named DATABASE_URL which must be a string
const app = new Hono<{
  Bindings:{
    DATABASE_URL:string
  }
}>

app.get('/api/v1/signup', async (c) => {
  const prisma= new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const body = await c.req.json()
  await prisma.user.create({
    data:{
      email:body.email,
      password:body.password
    }
  })
  return c.text('Hello Hono!')
})

app.post('/api/v1/signin',(c)=>{
  return c.text('Hello Hono!')
})

app.post('/api/v1/blog',(c)=>{
  return c.text('Hello Hono!')
})

app.put('/api/v1/blog',(c)=>{
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/:id',(c)=>{
  return c.text('Hello Hono!')
})

export default app
