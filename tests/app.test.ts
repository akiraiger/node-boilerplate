import supertest from 'supertest'

import app from '../src/app'

test('Health check', async () => {
  await supertest(app)
    .get('/api/health')
    .expect(200)
    .then((response) => {
      const health = response.body.health

      expect(health).toBe('Healthy')
    })
})

test('Prisma query', async () => {
  await supertest(app)
    .get('/api/test')
    .expect(200)
    .then((response) => {
      const data = response.body.data
      const user = response.body.data[0]

      expect(data.length).toBe(1)
      expect(user.posts[0].title).toBe('Hello World')
      expect(user.profile.bio).toBe('I like turtles')
    })
})
