import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ConfirmationPage.module.scss";

const ConfirmationPage = () => {
  let redirect;
  const { state } = useLocation();
  const navigate = useNavigate();
  const msg = state ?
    `Dear ${state.firstName} ${state.lastName}, we will welcome you at
    ${state.date}, ${state.time}.`
    : '';

  redirect = setTimeout(() => {
    clearTimeout(redirect);
    navigate('/');
  }, 10_000);
  return (
    <main className={styles.confirmationPage}>
      <h1>Thank you for the reservation!</h1>
      <p>{msg}</p>
      <span>You will be redirected to the home page in 10 seconds.</span>
    </main>
  )
}

export default ConfirmationPage;
