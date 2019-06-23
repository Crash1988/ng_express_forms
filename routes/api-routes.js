// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
// var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    res.json({response: true});
  });

  // // Get route for returning posts of a specific category
  // app.get("/api/posts/category/:category", function(req, res) {
  //   res.json({response: true});

  // });

  // // Get route for retrieving a single post
  // app.get("/api/posts/:id", function(req, res) {
  //   res.json({response: true});

  // });

  // // POST route for saving a new post
  // app.post("/api/posts", function(req, res) {
  //   res.json({response: true});

  // });

  // // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   res.json({response: true});

  // });

  // // PUT route for updating posts
  // app.put("/api/posts", function(req, res) {
  //   res.json({response: true});

  // });
};
