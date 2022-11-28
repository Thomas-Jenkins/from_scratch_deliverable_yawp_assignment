const { Router } = require('express');
const Restaurant = require('../models/restaurants');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const restaurant = await Restaurant.getAll();
      res.json(restaurant);
    } catch (e) {
      next(e);
    }
  });
