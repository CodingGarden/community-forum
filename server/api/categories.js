const express = require('express');

const router = express.Router();

const { checkAuthHeaderSetUserUnAuthorized, isAdmin } = require('../middlewares');

const categories = require('../queries/categories');

router.get('/', async (req, res, next) => {
  try {
    const all = await categories.getAll();
    res.json(all);
  } catch (error) {
    next(error);
  }
});

router.post('/', checkAuthHeaderSetUserUnAuthorized, isAdmin, async (req, res, next) => {
  try {
    const category = await categories.insert(req.body);
    res.json(category);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
