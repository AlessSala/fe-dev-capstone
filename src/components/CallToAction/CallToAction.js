import styles from "./CallToAction.module.scss";
import restauranfood from "assets/restauranfood.jpg";

export default function CallToAction() {
  return (
    <div className={styles.callToAction}>
      <div className={styles.ctaContent}>
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <a href="/booking">
            <button class="reserve-btn btn">
              Reserve a table
            </button>
          </a>
        </div>
        <img
          src={restauranfood}
          alt="restaurant and food"
          width="280"
          height="290"
        />
      </div>
    </div>
  )
}
