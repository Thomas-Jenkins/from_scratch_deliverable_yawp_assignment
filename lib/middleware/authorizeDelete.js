const Review = require('../models/Reviews');

module.exports = async (req, res, next) => {
  const resp = await Review.getById(req.params.id);
  try {
    if ( 
      req.user && 
        (req.user.email === 'admin' || req.user.id === resp.user_id)
    ) {
      next();
    } else { throw new Error('Unauthorized attempt');
    }
  } catch (e) {
    e.status = 403;
    next(e);
  }
};
