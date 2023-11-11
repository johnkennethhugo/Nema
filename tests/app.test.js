const EmployeeController = require('../components/controllers/employeeController');

describe('Employee Controller', () => {
  const res = {
    json: jest.fn(),
    status: jest.fn(() => res),
  };

  const testUser = {
    EmployeeID: 123456,
    LastName: "Test Employee",
    FirstName: "John",
    MiddleName: "Test",
    Role: 1,
    Status: 1
  }

  test('should get all employees', async () => {
    const req = {}; 
    await EmployeeController.getAllEmployees(req, res);
    expect(res.body.EmployeeID).not.toBeNull();
  });

  test('should create an employee', async () => {
    const req = {};
    req.body = testUser;
    await EmployeeController.createEmployee(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
  });

  test('should get test employee "123456"', async () => {
    const req = {
      params: { id: 123456 }
    };
    await EmployeeController.getEmployeeById(req, res);
    expect(res.json).toBe(testUser);
  });

  test('should update test employee "123456"', async () => {
    const req = {
      params: { id: 123456 }
    };
    const updated = { ...testUser, FirstName: "Jane" };
    req.body = updated;
    await EmployeeController.updateEmployee(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
  });

  test('should delete test employee "123456"', async () => {
    const req = {
      params: { id: 123456 }
    };
    await EmployeeController.deleteEmployee(req, res);
    expect(res.status).toHaveBeenCalledWith(404); // Assuming 404 is the correct status
  });
});