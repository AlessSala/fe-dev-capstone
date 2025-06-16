import styles from "./AboutUs.module.scss";
import aboutUs from "assets/aboutUs.png";

export default function AboutUs() {
  return (
    <div
      className={styles.aboutUs}
      data-testid="AboutUs"
    >
      <div className={styles.abuContent}>
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Welcome to Little Lemon in Chicago! We are a family-owned Mediterranean restaurant
            dedicated to bringing you authentic flavors with a modern touch. Our focus is on traditional
            recipes passed down through generations,
            carefully prepared with fresh ingredients and a contemporary twist.
            At Little Lemon, we pride ourselves on creating a warm,
            inviting atmosphere where every meal feels like a visit to family.
            Join us to enjoy a taste of the Mediterranean right in the heart of Chicago!
          </p>
        </div>
        <img
          src={aboutUs}
          alt="about us"
          width="445"
          height="426"
        />
      </div>
    </div>
  )
}
