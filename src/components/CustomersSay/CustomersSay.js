import styles from "./CustomersSay.module.scss";
import alfredHitchcock from "assets/customerssay/AlfredHitchcock.jpg";
import hopePhillips from "assets/customerssay/HopePhillips.jpg";
import susanaOrtega from "assets/customerssay/SusanaOrtega.jpg";

const imgs = {
  alfredHitchcock,
  hopePhillips,
  susanaOrtega
};

// from a database, an API endpoint?
const customersData = [
  {
    name: 'alfredHitchcock',
    title: 'Alfred Hitchcock',
    reviewText: `Little Lemon exceeded all my expectations!
      The ambiance was cozy and inviting, the staff was incredibly friendly,
      and the dishes were simply phenomenal.
      The flavors were so fresh and innovative—I especially loved the lemon-infused pasta.
      I’ll definitely be returning soon and recommending it to all my friends.`,
    rating: 5
  },
  {
    name: 'hopePhillips',
    title: 'Hope Phillips',
    reviewText: `My visit to Little Lemon was decent.
      The service was alright, and the food was okay, but nothing really stood out.
      The menu had some interesting options, but the dishes weren't as memorable as I hoped.
      Overall, it was a satisfactory meal, but I might explore other places in the neighborhood next time.`,
    rating: 3
  },
  {
    name: 'susanaOrtega',
    title: 'Susana Ortega',
    reviewText: `I had a good experience at Little Lemon.
    The staff was attentive, and the atmosphere was relaxing.
    The lemon chicken dish was flavorful and cooked just right.
    It’s a nice spot for a casual dinner, and I’ll probably come back to try more from their menu.`,
    rating: 4
  },
];

const customersSay = customersData.map((item) => {
  return <article
    key={item.name}
  >
    <img
      src={imgs[item.name]}
      alt={item.name}
      width="200"
      height="200"
    />
    <header>
      <h1>
        {item.title}
      </h1>
      <div>
        {[...Array(item.rating)].map((e, i) => <span key={i}>&#9733;</span>)}
      </div>
    </header>
    <p>
      {item.reviewText}
    </p>
  </article>;
});

export default function CustomersSay() {
  return (
    <>
      <div
        className={styles.customersSay}
        data-testid="CustomersSay"
      >
        <h1>Testimonials</h1>
        <div className={styles.customersSayContent}>
          {customersSay}
        </div>
      </div>
    </>
  )
}
