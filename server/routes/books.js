const express = require('express');
const router = express.Router();

// MIDDLEWARE
const { auth } = require('../middleware/auth');

// MODELS
const { Book } = require('../models/book');

router.route('/book')
.get((req,res) => {

})
.post(auth,(req,res) => {
	const book = new Book({
		...req.body,
		ownerId: req.user._id
	});
	book.save((err, doc) => {
		if(err) return res.status(400).send(err);
		res.status(200).json({
			post: true,
			bookId: doc._id
		})
	})
})
.patch(auth,(req,res) => {

})
.delete(auth,(req,res) => {

})

module.exports = router;