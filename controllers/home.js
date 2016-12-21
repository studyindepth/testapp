var sidebar = require('../helpers/sidebar');
var ImageModel = require('../models').Comment
module.exports = {
    index: function (req, res) {
        res.render('index');
    }
};
