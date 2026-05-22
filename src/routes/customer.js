const express = require('express');
const router = express.Router();
const auth = (req, res, next) => {
  if (!req.session.user || req.session.user.role !== 'customer') return res.redirect('/auth/login');
  next();
};
router.get('/dashboard', auth, (req, res) => res.render('customer/dashboard', { user: req.session.user }));
module.exports = router;
