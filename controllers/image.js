var fs = require('fs');
var path = require('path');
var sidebar = require('../helpers/sidebar');
var Models = require('../models');

module.exports = {
    index: function (req, res) {
        var viewModel = {
            image: {},
            comments: []
        };
        Models.Image.findOne({filename: {$regex: req.params.image_id}}, function (err, image) {s
            if (err) throw err;
            if (image) {
                viewModel.image = image;
                res.render('image', viewModel);
            } else {
                res.redirect('/');
            }
        });
        throw new Error('Cannot connect to mongo');
    },
    create: function (req, res) {
        var saveImage = function () {
            var possible = 'abcdefghijklmnopqrstuvwxyz0123456789',
                imgUrl = '';
            for (var i = 0; i < 6; i += 1) {
                imgUrl += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            var tempPath = req.file.path.toString();
            var ext = path.extname(req.file.originalname).toLowerCase();
            var targetPath = path.resolve('./public/upload/' + imgUrl + ext);
            if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
                fs.rename(tempPath, targetPath, function (err) {
                    if (err) throw err;
                    res.redirect('/images/' + imgUrl);
                });
            } else {
                fs.unlink(tempPath, function () {
                    if (err) throw err;
                    res.json(500, {error: 'Only image files are allowed.'});
                });
            }
            var fileName = imgUrl + ext;
            var image = new Models.Image({
                title: req.body.title,
                description: req.body.description,
                filename: fileName
            });
            image.save();
        };
        saveImage();
    },
    like: function (req, res) {
        res.send('The image:like POST controller');
    },
    comment: function (req, res) {
        res.send('The image:comment POST controller');
    }
};