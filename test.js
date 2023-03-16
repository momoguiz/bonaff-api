const axios = require('axios')
const mongoose = require('mongoose')
require('dotenv').config()
const User = require('./models/userModel')



const addTodo = (todos, newTodo) => [...todos, newTodo];

test('adds a new todo to the list', () => {
  const todos = ['Buy milk', 'Do laundry'];
  const newTodo = 'Take a walk';
  const result = addTodo(todos, newTodo);
  expect(result).toEqual(['Buy milk', 'Do laundry', 'Take a walk']);
});


describe('API Call', () => {
    it('Makes a successful API call', async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      expect(response.status).toEqual(200);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBeGreaterThan(0);
    });
  });


  beforeAll(async () => {
    const url = process.env.MONGO_URI
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  });
  
  afterAll(async () => {
    await mongoose.connection.close();
  });
  
  describe('User Model Test', () => {
    it('Adds a user to the database', async () => {
      const user = new User({
        name: 'Diallo',
        prenom:'Alhassane',
        email:'diallo@gmail.com',
        telephone:664366030
      });
  
      const savedUser = await user.save();
      const foundUser = await User.findOne({ first_name: 'Jenny' });
  
      expect(savedUser._id).toEqual(foundUser._id);
    });
  });
  