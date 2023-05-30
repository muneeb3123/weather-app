import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Details() {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.Details);

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
      {data.name}
    </div>
  );
}

export default Details;
