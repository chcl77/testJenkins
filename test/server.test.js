const request = require('supertest');
const app = require('../server');

test('GET / 테스트', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('hello there');
});

test('GET /hello 테스트', async () => {
    const response = await request(app).get('/hello');

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('this is for hello');
});