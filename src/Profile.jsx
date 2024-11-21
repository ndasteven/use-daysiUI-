import React from 'react';

export default function Profile(props) {
  return (
    
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={props.image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.titre}</h2>
    <p>{props.acteur}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    </div>
  );
}
