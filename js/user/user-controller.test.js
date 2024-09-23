const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

// Implementar una prueba para add() que verifica un usuario que no está en la lista de usuarios.

//1
test('Verify user is add', () => {    
  let user = new User(3456,"Juan", "juan@gmail.com");
  expect(userController.getUsers()).not.toContain(user);
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
})
//2
test('add user that is not in the list', () => {
  let user = new User(5678, "María", "maria@generation.org");
  expect(userController.getUsers()).not.toContain(user);
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});


/* //2
test('Verify user is not in the list before adding', () => {    let user = new User(1234, "Ana", "ana@example.com");    // Asegúrate de que el usuario no esté en la lista antes de agregarlo    
expect(userController.getUsers().some(u => u.id === user.id)).toBe(false);    // Agregar el usuario    
userController.add(user);    // Verificar que el usuario ahora está en la lista    
expect(userController.getUsers().some(u => u.id === user.id)).toBe(true);}); 
 */


// Prueba para eliminar un usuario que no está en la lista

test('remove user not be userController', () => {    
  let user = new User(1234,"Santiago", "santiago@generation.org"); 
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});


// Pruebas para findByEmail()
test('find user by email', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.findByEmail("santiago@generation.org")).toEqual(user);
});

test('return undefined when findByEmail does not find user', () => {
  let foundUser = userController.findByEmail("nonexistent@generation.org");
  expect(foundUser).toBeUndefined();
});


// Pruebas para findById()
test('find user by id', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.findById(user.id)).toEqual(user);
});

test('return undefined when findById does not find user', () => {
  let foundUser = userController.findById(9999);
  expect(foundUser).toBeUndefined();
});

