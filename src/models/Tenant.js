const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subdomain: { type: String, required: true, unique: true, lowercase: true },
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  logo: { type: String },
  is_active: { type: Boolean, default: true },
  subscription_plan: { type: String, default: 'basic' },
  subscription_expires_at: { type: Date },
  settings: {
    currency: { type: String, default: 'GHS' },
    grace_period_hours: { type: Number, default: 48 },
    payment_period_months: { type: Number, default: 6 }
  },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Tenant', tenantSchema);
