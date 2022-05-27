const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json({ extented: false }));
//get request
app.get('/', (req, res) => res.json({ msg: 'get route' }));

//post request
app.post('/', (req, res) => {
  const { name, email } = req.body;
  try {
    if (name == 'sarthak' && email == 'sarthak@gmail.com') {
      return res.status(200).json({ msg: 'succesfull' });
    }
    return res.status(403).json({ msg: 'incorrect email or password' });
  } catch (err) {
    return res.status(500).send('server');
  }
});

app.get('/get_movies', (req, res) => {
  const movies = [
    { name: 'batman', rating: '5', date: '10/5/2000' },
    { name: 'inception', rating: '5', date: '10/5/2000' },
    { name: 'titanic', rating: '5', date: '10/5/2000' },
    { name: 'forrest gump', rating: '5', date: '10/5/2000' },
    { name: 'avatar', rating: '5', date: '10/5/2000' },
    { name: 'the godfather', rating: '5', date: '10/5/2000' },
    { name: 'fight club', rating: '5', date: '10/5/2000' },
    { name: 'star wars', rating: '5', date: '10/5/2000' },
    { name: 'spiderman', rating: '5', date: '10/5/2000' },
    { name: 'the lion king', rating: '5', date: '10/5/2000' },
    { name: 'taxi man', rating: '5', date: '10/5/2000' },
    { name: 'psycho', rating: '5', date: '10/5/2000' },
    { name: '2012', rating: '5', date: '10/5/2000' },
    { name: '2001', rating: '5', date: '10/5/2000' },
    { name: 'rockstar', rating: '5', date: '10/5/2000' },
    { name: 'angry birds', rating: '5', date: '10/5/2000' },
    { name: 'acopolypse', rating: '5', date: '10/5/2000' },
    { name: 'Zero', rating: '5', date: '10/5/2000' },
    { name: 'godfather', rating: '5', date: '10/5/2000' },
    { name: 'inception', rating: '5', date: '10/5/2000' },
  ];

  res.json({ movies: movies });
});
app.listen(PORT, () => console.log(`server started on ${PORT}`));
