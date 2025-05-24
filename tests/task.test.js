const request = require('supertest');
const app = require('../src/server');

describe('Task API', () => {
  it('deve inserir tarefas', async () => {
    const res = await request(app)
      .post('/insert-tasks')
      .send([{ description: 'Teste A', responsable: 'caio', status: 'todo' }])
      .set('Accept', 'application/json');

    expect(res.statusCode).toBe(201);
    expect(res.body[0]).toHaveProperty('id');
  });

  it('deve listar tarefas existentes', async () => {
    const res = await request(app).get('/get-tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
