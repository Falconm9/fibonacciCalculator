import app from "../app";
import request from 'supertest';

describe("test Fibonacci router", () => {

  test('get fibonacci value of 0', async () => {
    const res = await request(app)
    .get(`/fibonacci/0`)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
        fibonacciNumber: 0
    });
    
  });

  test('get fibonacci value of negative number', async () => {
    const res = await request(app)
    .get(`/fibonacci/-1`)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
        fibonacciNumber: -1
    });
  });

  test('get fibonacci value of 1', async () => {
    const res = await request(app)
    .get(`/fibonacci/1`)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
        fibonacciNumber: 1
    });
  });

  test('get fibonacci value of number > 2', async () => {
    const res = await request(app)
    .get(`/fibonacci/6`)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
        fibonacciNumber: 8
    });
  });

  test('test / route', async () => {
    const res = await request(app)
    .get(`/`)
    expect(res.statusCode).toEqual(200)
  });
});