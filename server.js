import express from 'express';

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({
    'message': 'YAY! Congratulations! Your first endpoint is working'
  });
})

app.listen(3000)
console.log('Server started successfully! app running on port ', 3000);