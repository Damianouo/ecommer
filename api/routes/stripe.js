const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);

router.post('/payment', (req, res) => {
  stripe.charges.create(
    {
      //? make payment => stripe return a tokenID
      source: req.body.tokenId,
      amount: req.body.amount,
      curreny: 'usd',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
