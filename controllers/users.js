import { v4 as uuidv4 } from 'uuid';

let users = [
  {
    firstname: "Tommy",
    lastname: "Burke",
    age: 28,
    id: uuidv4()
  },
  {
    firstname: "Taya",
    lastname: "Burke",
    age: 21,
    id: uuidv4()
  }
]

export const getUsers = (req, res) => {
  res.send(users);
}

export const createUser = (req, res) => {

  const user = req.body;
  const userId = uuidv4();

  const userWithId = { ... user, id: userId }

  users.push(userWithId);

  res.send(`User with the name ${user.firstname} added to the database!`);

  console.log(users);
}

export const getUserById = (req, res) => {
  
  const { id } = req.params;
  
  let foundUser = users.find((user) => user.id === id);
  
  res.send(foundUser);
}

export const deleteUserById = (req, res) => {
  
  const { id } = req.params;
  
  let foundUser = users.find((user) => user.id === id);

  users = users.filter((user) => user.id !== id);

  res.send(`${foundUser.firstname} has been deleted from the database.`);

}

export const updateUserById = (req, res) => {

  const { id } = req.params;
  const { firstname, lastname, age } = req.body;

  const user = users.find((user) => user.id === id);

  if(firstname) user.firstname = firstname;
  if(lastname) user.lastname = lastname;
  if(age) user.age = age;

  res.send(`User ${firstname} has been updated.`)
}