const { Router } = require('express');
const Restaurant = require('../models/restaurants');

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

  .get('/', async (req, res, next) => {
    try {
      const restaurant = await Restaurant.getAll();
      res.json(restaurant);
    } catch (e) {
      next(e);
    }
  });
