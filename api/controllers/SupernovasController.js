/**
 * SupernovasController
 *
 * @description :: Server-side logic for managing Supernovass
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function index(req, res) {
//	 console.dir('hitting the controller');
        Supernovas.find().exec(function (errors, supernovas) {
            return res.view('table', {
                supernovas: supernovas
            });
        });
    },
    delete: function (req, res) {
        Supernovas.destroy({'sn': req.param('sn')}).exec(function (err, result) {
            if (err) {
                return res.badRequest(err);
            } else {
                return res.ok();
            }
        })
    },
    update: function (req, res) {
        var nova = req.params.all();
        Supernovas.update({sn: nova.sn}, nova).exec(function (err, updated) {
            if (err) {
                return res.badRequest(err);
            } else {
                return res.ok();
            }
        })
    },
    create: function(req, res){
        var nova = req.params.all();
        Supernovas.create(nova).exec(function(err, newNova){
            if (err) {
                return res.badRequest(err);
            } else {
                return res.ok();
            }
        });
    }

};
