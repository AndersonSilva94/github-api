import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function usePersistentState(key, initialState) {
  const [state, setState] = useState(() => {
    const valueStorage = localStorage.getItem(key);

    if (valueStorage) return JSON.parse(valueStorage);
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState];
}

usePersistentState.propTypes = {
  key: PropTypes.string.isRequired,
  initialState: PropTypes.shape({}).isRequired
}

export default usePersistentState;