/**
 * SupernovasController
 *
 * @description :: Server-side logic for managing Supernovass
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
 index: function index(req, res) {
//	 console.dir('hitting the controller');
	 Supernovas.find().exec(function(errors, supernovas) {
		 return res.view('table', {
			 supernovas: supernovas
		 });
	 });
 },
 // delete: function(req, res) {
 //  //var name = req.formData.name;
 // }

};
