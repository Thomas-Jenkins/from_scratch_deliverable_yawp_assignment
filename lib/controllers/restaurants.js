const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Restaurant = require('../models/restaurants');
const Review = require('../models/Reviews');

module.exports = Router()
  
  .get('/:id', async (req, res, next) => {
    try {
      const restaurant = await Restaurant.getById(req.params.id);
      // console.log(restaurant);
      await restaurant.addReviews();
      res.json(restaurant);
    } catch (e) {
      next(e);
    }
  })

  .post('/:id/reviews', authenticate, async (req, res, next) => {
    try {
      const review = await Review.insert({
        userId: req.user.Id,
        restaurantId: req.params.id,
        stars: req.body.stars,
        detail: req.body.detail,
      });
      res.json(review);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const restaurant = await Restaurant.getAll();
      res.json(restaurant);
    } catch (e) {
      next(e);
    }
  });
