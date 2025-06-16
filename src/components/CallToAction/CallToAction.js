import styles from "./CallToAction.module.scss";
import serving from "assets/serving.jpg";
import { Link } from "react-router";

export default function CallToAction() {
  return (
    <div
      className={styles.callToAction}
      data-testid="CallToAction"
    >
      <div className={styles.ctaContent}>
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button>
              Reserve a table
            </button>
          </Link>
        </div>
        <img
          src={serving}
          alt="restaurant and food"
          width="280"
          height="290"
        />
      </div>
    </div>
  )
}
