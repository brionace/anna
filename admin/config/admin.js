module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a05b21ef2a7d38adcb953d6cb9a6b815'),
  },
});
