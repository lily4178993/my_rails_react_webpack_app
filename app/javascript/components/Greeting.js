import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/Greeting/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const refreshGreeting = () => {
    dispatch(fetchGreeting());
  };

  return (
    <>
      <h1 style={{fontSize: '4rem'}}>{greeting}</h1>
      <button
        type="button"
        onClick={refreshGreeting}
        style={{fontSize: '2rem', padding: '1rem', marginTop: '1rem'}}
      >
        Refresh
      </button>
    </>
  );
};

export default Greeting;
