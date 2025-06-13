import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from 'components';
import { HomePage, BookingPage } from 'pages';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<HomePage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
