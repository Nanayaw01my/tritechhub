const express = require('express');
const router = express.Router();
router.get('/login', (req, res) => res.render('auth/login'));
router.post('/login', (req, res) => {
  const { identity, password, portal } = req.body;
  // Mock login — replace with real DB check
  const accounts = {
    'super@tritech.com': { role: 'super_admin', password: 'super123', name: 'Super Admin' },
    'admin@tenant.com': { role: 'admin', password: 'admin123', name: 'Tenant Admin' },
    'staff@tenant.com': { role: 'staff', password: 'staff123', name: 'Staff Member' },
    'TRI202400001': { role: 'customer', password: '12345', name: 'John Mensah' },
  };
  const user = accounts[identity];
  if (user && user.password === password) {
    req.session.user = { name: user.name, role: user.role, identity };
    const redirects = { super_admin: '/admin/super', admin: '/admin/dashboard', staff: '/staff/dashboard', customer: '/customer/dashboard' };
    return res.redirect(redirects[user.role]);
  }
  req.flash('error', 'Invalid credentials. Please try again.');
  res.redirect('/auth/login');
});
router.get('/logout', (req, res) => { req.session.destroy(); res.redirect('/auth/login'); });
module.exports = router;
