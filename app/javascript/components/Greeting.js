import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/Greeting/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  const { loading, greeting } = useSelector((state) => state.greeting);

  const loadGreeting = useCallback(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  useEffect(() => {
    loadGreeting();
  }, [loadGreeting]);

  return (
    <>
      <h1
        className={loading ? '' : 'fade-in'}
        data-greeting-message={loading ? '' : greeting}
      >
        {loading ? '...' : greeting}
      </h1>
      <button
        type="button"
        onClick={loadGreeting}
      >
        Click me for a new greeting
      </button>
    </>
  );
};

export default Greeting;
