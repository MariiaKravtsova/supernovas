/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

     var supernovas = require('../assets/supernovas.json');
     console.dir(typeof supernovas);
     console.dir(supernovas.length);
     var supernovasParsed = [];
     for (index in supernovas) {
       const supernova = supernovas[index];
       const sup = {};
       sup.sn = supernova.sn;
       sup.suphost = supernova.suphost;
       sup.galaxy = supernova.galaxy;
       sup.date = supernova.date;
       sup.ra = supernova.ra;
       sup.mag = supernova.mag;
       sup.position = supernova.position;
       sup.suptype = supernova.suptype;
       sup.discoverer = supernova.discoverer;
       supernovasParsed.push(sup);
   }
   Supernovas.create(supernovasParsed).exec(function(errors, supernovas) {
   //console.dir(errors);
   //console.dir(supernovas);
   });

cb();
};
