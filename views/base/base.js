var express = require('express');
var router = express.Router();

var basedate = { title: 'Base Page' };
var title = "This Base";
var style = "/stylesheets/apps.css";
var bundle = "/assets/apps.bundle.js";
var icon = "/img/favicon.ico";

//base ui view, used apps bundle
router.get('/', function(req, res) {
  var tagline = "This base page";
  res.render('base/index', {
    title: title,
    style: style,
    icon: icon,
    bundle: bundle,
    tagline: tagline
  });
});

module.exports = router;
