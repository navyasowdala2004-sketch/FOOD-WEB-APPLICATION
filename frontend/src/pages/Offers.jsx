function Offers() {
  const offers = [
    {
      id: 1,
      title: "50% OFF Burger",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      code: "BURGER50",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Pizza",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      code: "PIZZAFREE",
    },
    {
      id: 3,
      title: "Free Delivery",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
      code: "FREEDEL",
    },
  ];

  return (
    <div className="offers-page">
      <h1>🔥 Today's Special Offers</h1>

      <div className="offers-grid">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="offer-card"
          >
            <img
              src={offer.image}
              alt={offer.title}
            />

            <h2>{offer.title}</h2>

            <p>
              Coupon Code:
              <strong>
                {" "}
                {offer.code}
              </strong>
            </p>

            <button>
              Claim Offer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;