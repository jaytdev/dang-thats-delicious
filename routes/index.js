const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // res.send('Hey! It works!');
  // res.json({ name: 'Jay', age: 32, cool: true })
  // res.send(req.query.name)
  // res.json(req.query)
  const name = req.query.name || 'world'

  res.render('hello', { name })
});

router.get('/reverse/:name', (req, res) => {
  const reversed = [...req.params.name].reverse().join('')

  res.send(reversed)
})

module.exports = router;
