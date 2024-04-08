import './App.css'
import BookingForm from './components/bookingForm/BookingForm';
import { useState, useEffect } from 'react';

function App() {

  const [booking, setBooking] = useState({});
  const [travelClass, setTravelClass] = useState('');
  const [tickets, setTickets] = useState(0);
  const [title, setTitle] = useState('Mr');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [approved, setApproved] = useState(false);

  const handleTravelClass = (event) => {
    console.log(event.target.value);
    setTravelClass(event.target.value);
  }

  const handleTickets = (event) => {
    console.log(event.target.value);
    setTickets(event.target.value);
  }

  const handleTitle = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  }

  const handleFirstName = (event) => {
    console.log(event.target.value);
    setFirstName(event.target.value);
  }

  const handleLastName = (event) => {
    console.log(event.target.value);
    setLastName(event.target.value);
  }

  const handleApproved = (event) => {
    console.log(event.target.checked);
    setApproved(!approved);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(approved) {
      const bookingObject = {
        travelClass : travelClass,
        tickets : tickets,
        title : title,
        firstName : firstName,
        lastName : lastName
      }
      // console.log('object', bookingObject);

      setBooking(bookingObject);
    } else {
      console.log('Du måste godkänna villkoren');
    }
  }

  useEffect(() => {
    console.log('Bokning:', booking);
  }, [booking]);
  
  return (
    <div className="app">
      <BookingForm 
        handleTravelClass={ handleTravelClass }
        handleTickets={ handleTickets }
        handleTitle={ handleTitle }
        handleFirstName={ handleFirstName }
        handleLastName={ handleLastName } 
        handleApproved={ handleApproved }
        handleSubmit={ handleSubmit }
      />
    </div>
  )
}

export default App
