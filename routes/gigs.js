const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

router.get('/', (req, res) => 
    Gig.findAll()
        .then(gigs => {
            res.render('gigs', {
                gigs
            });
        })
        .catch(err => console.log(err)));

// Add a thing
router.get('/add', (req, res) => {
    const data = {
        title: 'Pet website',
        technologies: 'javascript, sequelize, heroku, bootstrap, html, css',
        budget: '$10000000',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        contact_email: 'Britney@gmail.com'
    }

    let {title, technologies, budget, description, contact_email } = data;

    // into table:
    Gig.create({
        title,
        technologies,
        description,
        budget,
        contact_email
    })
        .then(gig => res.redirect('/gigs'))
        .catch(err => console.log(err));
});

module.exports = router;