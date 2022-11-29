const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const authorizeDelete = require('../middleware/authorizeDelete');
const Review = require('../models/Reviews');

module.exports = Router()
  .delete('/:id', [authenticate, authorizeDelete], async (req, res, next) => {
    try{
      const res = await Review.delete(req.params.id);
      res.json({ success: true, message: 'Delete Successful' });
    } catch (e) {
      next(e);
    }
  });
