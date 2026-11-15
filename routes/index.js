var express = require('express');
var router = express.Router();


const projects = [
  {
    title: "First Project",
    description: "",
    tech: [],
    image: "",
    github: "",
    live: ""
  },
  {
    title: "Second Project",
    description: "",
    tech: [],
    image: "",
    github: "",
    live: ""
  },
  {
    title: "Third Project",
    description: "",
    tech: [],
    image: "",
    github: "",
    live: ""
  },
  {
    title: "Fourth Project",
    description: "",
    tech: [],
    image: "",
    github: "",
    live: ""
  }
];

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home', page: 'index' });
});

router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Home', page: 'index' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Me', page: 'about' });
});

router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects', page: 'projects', projects: projects });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact Me', page: 'contact', sent: false, name: '' });
});

router.post('/contact', function (req, res, next) {
  const name = req.body.name || 'there';
  res.render('contact', { title: 'Contact Me', page: 'contact', sent: true, name: name });
});

module.exports = router;
