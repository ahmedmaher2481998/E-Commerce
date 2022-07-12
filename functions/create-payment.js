//acess .netlify/functions/create-payment
exports.handler = async (event, context) => {
	require("dotenv").config();
	const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);
	if (event.body) {
		console.log("This is the body ", JSON.parse(event.body));
		const { cart, totalAmount, shippingFee } = JSON.parse(event.body);
		const calculateOrderAmount = () => {
			return shippingFee + totalAmount;
		};
		try {
			const payment = await stripe.paymentIntents.create({
				amount: calculateOrderAmount(),
				currency: "usd",
				payment_method_types: ["card"],
			});
			// console.log("*********", payment);
			return {
				statusCode: 200,
				body: JSON.stringify({ clientSecret: payment.client_secret }),
			};
		} catch (error) {
			return {
				statusCode: 500,
				body: JSON.stringify({
					msg: error.message,
				}),
			};
		}
	}
	return { statusCode: 200, body: "create payment!!" };
};
