// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the contacts
  app.get('/api/contacts/', function(req, res) {
    db.Contact.findAll({}).then(function(dbContact) {
      res.json(dbContact);
    });
  });

   // POST route for saving a new contact
   app.post('/api/contacts', function(req, res) {
    console.log(req.body);
    db.Contact.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    }).then(function(dbContact) {
      res.json(dbContact);
    });
  });
};
