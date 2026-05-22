const express = require('express');
const router = express.Router();
const auth = (req, res, next) => {
  if (!req.session.user || req.session.user.role !== 'staff') return res.redirect('/auth/login');
  next();
};
router.get('/dashboard', auth, (req, res) => res.render('staff/dashboard', { user: req.session.user }));
router.get('/add-customer', auth, (req, res) => res.render('staff/add-customer', { user: req.session.user }));
router.get('/customers', auth, (req, res) => res.render('staff/customers', { user: req.session.user }));
module.exports = router;
