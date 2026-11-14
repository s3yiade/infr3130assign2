var express = require('express');
var router = express.Router();


const projects = [
  {
    title: "First Project",
    description: "",
    tech: ["", "", ""],
    image: "",
    github: "",
    live: "true"
  },
  {
    title: "2nd Project",
    description: "",
    tech: [],
    image: "",
    github: "",
    live: "true"
  },
  {
    title: "3rd Project",
    description: "",
    tech: [],
    image: "",
    github: "",
    live: "true"
  },
  {
    title: "4th Project",
    description: "",
    tech: [],
    image: "",
    github: "",
    live: "true"
  },
  {
    title: "2nd Project",
    description: "",
    tech: [],
    image: "",
    github: "",
    live: "true"
  }
];

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});

router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About-me', page: 'about' });
});

router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects', page: 'projects' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact me', page: 'contact' });
});

router.post('/contact', function (req, res, next) {
  const name = req.body.name || 'there';
  res.render('contact', { title: 'Contact Me', page: 'contact' });
});

module.exports = router;
