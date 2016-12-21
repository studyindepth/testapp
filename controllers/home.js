var sidebar = require('../helpers/sidebar');
var ImageModel = require('../models').Comment
module.exports = {
    index: function (req, res) {
        var viewModel = {};
        ImageModel.find({}, {}, {sort: {timestamp: -1}},
            function (err, images) {
                if (err) {
                    throw err;
                }
                viewModel.images = images;
                sidebar(viewModel, function (viewModel) {
                    res.render('layouts/index', viewModel);
                });
            });
    }
};
