import styles from "./Specials.module.scss";
import bruschetta from "assets/specials/bruschetta.jpg";
import greekSalad from "assets/specials/greek-salad.jpg";
import lemonDessert from "assets/specials/lemon-dessert.jpg";

const imgs = {
  bruschetta,
  greekSalad,
  lemonDessert
};

// from a database, an API endpoint?
const specialsData = [
  {
    name: 'greekSalad',
    title: 'Greek Salad',
    description: `The famous greek salad of crispy lettuce,
      peppers, olives and our Chicago style feta cheese,
      garnished with crunchy garlic and rosemary croutons.`,
    price: '$ 12.99'
  },
  {
    name: 'bruschetta',
    title: 'Bruschetta',
    description: `Our Bruschetta is made from grilled bread that has
      been smeared with garlic and seasoned with salt and olive oil.`,
    price: '$ 5.99'
  },
  {
    name: 'lemonDessert',
    title: 'Lemon Dessert',
    description: `This comes straight from grandma’s recipe book,
      every last ingredient has been sourced and is as
      authentic as can be imagined.`,
    price: '$ 5.00'
  },
];

const specials = specialsData.map((item) => {
  return <article>
    <img
      src={imgs[item.name]}
      alt={item.name}
      width="200"
      height="175"
    />
    <header>
      <h1>
        {item.title}
      </h1>
      <span>
        {item.price}
      </span>
    </header>
    <p>
      {item.description}
    </p>
    <footer>
      Order a delivery &#128757;
    </footer>
  </article>;
});

export default function Specials() {
  return (
    <>
      <div className={styles.specials}>
        <div className={styles.specialsTitle}>
          <h1>This weeks specials!</h1>
          <a href="#menu">
            <button class="btn">
              Online Menu
            </button>
          </a>
        </div>
        <div className={styles.specialsContent}>
          {specials}
        </div>
      </div>
    </>
  )
}
