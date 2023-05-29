import React from 'react';
import { useNavigate } from 'react-router-dom';

function Details() {
  const navigate = useNavigate();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => navigate('/')}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          navigate('/');
        }
      }}
    >
      hy
    </div>
  );
}

export default Details;
