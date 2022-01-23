const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
  res.render('homepage', {
    id: 1,
    post_url: 'https://handlebarsjs.com/guide/',
    title: 'Handlebars Docs',
    created_at: new Date(),
    comments: [{}, {}],
    user: {
      username: 'test_user'
    }
  });
});

module.exports = router;