import { BookingForm } from "components";
import { useReducer } from "react";
import { fetchAPI } from "utils/api";
import { UPDATE_AVAIL_TIMES } from "utils/dispatches";

const BookingPage = () => {
  const updateTimes = (date) => {
    return fetchAPI(date);
  };
  const initializeTimes = updateTimes(new Date());
  const reducer = (state, action) => {
    if (action.type === UPDATE_AVAIL_TIMES) return updateTimes(action.payload);
    throw Error('Unknown action.');
  }
  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes);

  return (
    <main>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </main>
  )
}

export default BookingPage;
