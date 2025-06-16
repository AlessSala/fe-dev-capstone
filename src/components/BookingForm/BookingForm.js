import styles from "./BookingForm.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "utils/api";
import { UPDATE_AVAIL_TIMES } from "utils/dispatches";

const BookingForm = ({ availableTimes, updateTimes }) => {
  const navigate = useNavigate();
  const currDate = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    date: currDate,
    time: availableTimes[0],
    guests: 1,
    occasion: "None"
  });

  const availableTimesOptions = availableTimes.map(time => <option key={time}>{time}</option>);
  const onSubmit = (event) => {
    event.preventDefault();
    if (submitAPI(formData)) navigate('/confirmation', { state: formData });
  };

  const onFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const onDateChange = async (event) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: value,
      time: availableTimes.includes(prevFormData.time) ? prevFormData.time : availableTimes[0]
    }));
    updateTimes({ type: UPDATE_AVAIL_TIMES, payload: value });
  };

  return (
    <div className={styles.bookingForm}>
      <h1>Reservations</h1>
      <form className={styles.bookingFormContent} onSubmit={onSubmit}>
        <div>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={onFormChange} required />
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={onFormChange} required />
        </div>
        <div>
          <label htmlFor="contact-number">Contact Number</label>
          <input type="text" id="contact-number" name="contactNumber" placeholder="123-456-7890"
            value={formData.contactNumber} onChange={onFormChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
        </div>
        <div>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" name="date" value={formData.date} onChange={onDateChange} required min={currDate} />
        </div>
        <div>
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" name="time" value={formData.time} onChange={onFormChange} required>
            {availableTimesOptions}
          </select>
        </div>
        <div>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" required id="guests" name="guests" value={formData.guests} onChange={onFormChange} />
        </div>
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" name="occasion" required value={formData.occasion} onChange={onFormChange}>
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <input class="button" type="submit" value="Make Your reservation" aria-label="Make Your reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
