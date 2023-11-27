const request = require('supertest')
const { app } = require('../app.js');

const testUser = {
  EmployeeID: 123456,
  LastName: "Test Employee",
  FirstName: "John",
  MiddleName: "Test",
  Role: 1,
  Status: 1
}

afterAll(async () => {
  await new Promise(resolve => setTimeout(resolve, 500)); 
  // await request(app).get('/close-server'); 
});

describe('Employee Controller', () => {
  it('GET /users --> array users', async () => {
    return await request(app)
      .get('/users')
      .expect('Content-Type',/json/)
      .expect(200)
      .then((response) =>{
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              EmployeeID: expect.any(Number),
              LastName: expect.any(String),
              FirstName: expect.any(String),
              MiddleName: expect.any(String),
              Role: expect.any(Number),
              Status: expect.any(Number)
            })
          ])
        );
      });
  });

  it('GET /users/:id --> specific user by ID', async () => {
    return await request(app)
      .get('/users/20221')
      .expect('Content-Type',/json/)
      .expect(200)
      .then((response) =>{
        expect(response.body).toEqual(
          expect.objectContaining({
            EmployeeID: expect.any(Number),
            LastName: expect.any(String),
            FirstName: expect.any(String),
            MiddleName: expect.any(String),
            Role: expect.any(Number),
            Status: expect.any(Number)
          })
        );
      });
    });
  
  it('GET /users/:id --> 404 Not Found', async () => {
    return await request(app)
      .get('/users/404040404')
      .expect('Content-Type',/json/)
      .expect(404);
  });

  it('POST /users --> creates user', async () => {
    await request(app)
      .post('/users/')
      .send(testUser)
      .expect('Content-Type',/json/)
      .expect(201)

      return await request(app)
        .get('/users/123456')
        .expect('Content-Type',/json/)
        .expect(200)
        .then((response) =>{
          expect(response.body).toEqual(
            expect.objectContaining({
              EmployeeID: testUser.EmployeeID,
              LastName: testUser.LastName,
              FirstName: testUser.FirstName,
              MiddleName: testUser.MiddleName,
              Role: testUser.Role,
              Status: testUser.Status
            })
          );
      });
  });

  it('PUT /users --> updates user'+ testUser.EmployeeID, async () => {
    const updated = { ...testUser, FirstName: "Jane" };
    await request(app)
      .put('/users/'+ testUser.EmployeeID)
      .send(updated)
      .expect('Content-Type',/json/)
      .expect(200);

    return await request(app)
      .get('/users/123456')
      .expect('Content-Type',/json/)
      .expect(200)
      .then((response) =>{
        expect(response.body).toEqual(
          expect.objectContaining({
            EmployeeID: updated.EmployeeID,
            LastName: updated.LastName,
            FirstName: updated.FirstName,
            MiddleName: updated.MiddleName,
            Role: updated.Role,
            Status: updated.Status
          })
        );
      });
  });

  it('DELETE /users --> Deletes user', async () => {
    await request(app)
    .delete('/users/'+ testUser.EmployeeID)
    .expect('Content-Type',/json/)
    .expect(200);

    return await request(app)
      .get('/users/'+ testUser.EmployeeID)
      .expect('Content-Type',/json/)
      .expect(404);
  });
});