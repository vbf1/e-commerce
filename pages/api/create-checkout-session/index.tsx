import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_KEY_SECRET!);

export default async (req: any, res: any) => {
  const tripRef = 40 * 100;
  const tripData = tripRef;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "brl",
          product_data: {
            description:
              "Um dos melhores pontos turisticos atualmente, vá e se divirta.",
            images: [
              "https://www.airport-technology.com/wp-content/uploads/sites/14/2022/01/shutterstock_758602234-min-scaled-e1641297696653.jpg",
              "https://www.nerdwallet.com/assets/blog/wp-content/uploads/2021/04/GettyImages-172672886-1920x1152.jpg",
            ],
            name: "Destino ",
          },
          unit_amount: tripData,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${req.headers.origin}/success`,
    cancel_url: `${req.headers.origin}/home`,
  });

  res.status(200).json({ url: session.url });
};
