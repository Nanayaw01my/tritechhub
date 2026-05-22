const express = require('express');
const router = express.Router();
const auth = (roles) => (req, res, next) => {
  if (!req.session.user || !roles.includes(req.session.user.role)) return res.redirect('/auth/login');
  next();
};
router.get('/dashboard', auth(['admin']), (req, res) => res.render('admin/dashboard', { user: req.session.user }));
router.get('/super', auth(['super_admin']), (req, res) => res.render('superadmin/dashboard', { user: req.session.user }));
router.get('/customers', auth(['admin']), (req, res) => res.render('admin/customers', { user: req.session.user }));
router.get('/staff', auth(['admin']), (req, res) => res.render('admin/staff', { user: req.session.user }));
router.get('/devices', auth(['admin']), (req, res) => res.render('admin/devices', { user: req.session.user }));
router.get('/transactions', auth(['admin']), (req, res) => res.render('admin/transactions', { user: req.session.user }));
router.get('/reports', auth(['admin']), (req, res) => res.render('admin/reports', { user: req.session.user }));
router.get('/settings', auth(['admin']), (req, res) => res.render('admin/settings', { user: req.session.user }));
module.exports = router;
