var express = require('express');
var router = express.Router();


const projects = [
  {
    title: "HESTIA",
    description: "Hestia- hestia is a property management software platform for canadian landlords",
    tech: ['TS', 'SUPA', 'NEXT.JS', 'VERCEL'],
    image: "/images/project1.png",
    github: "https://github.com/s3yiade/",
    live: "https://hestiapm.ca"
  },
  {
    title: "SOXO",
    description: "Soxo- soxo is a community building platform built for students",
    tech: ['TS', 'SUPA', 'NEXT.JS', 'VERCEL', 'AWS'],
    image: "/images/project2.png",
    github: "https://github.com/adinv/soxo",
    live: "https://soxo.online"
  },
  {
    title: "FoodFairy",
    description: "FoodFairy - foodfairy is a webapp i built for a client",
    tech: ['NODE.JS', 'HTML', 'AWS', 'VPS', 'LINUX'],
    image: "/images/project3.png",
    github: "https://github.com/adainv/foodfairy",
    live: "https://foodfairy.ca"
  },
  {
    title: "AEGIS",
    description: "AEGIS - aegis is an automated security scanner that checks your domains and website for vulns",
    tech: ['TS', 'NODE.JS', 'VERCEL'],
    image: "images/project4.png",
    github: "https://github.com/adainv/scanner",
    live: "https://viverna.ca/scan"
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
