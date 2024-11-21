import { useState } from 'react';
import Profile from './Profile';

function App() {

  const films = [{titre:'Spiderman', acteur:'Steven', image:'https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'},{titre:'Titanic', acteur:'Jack', image:'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp'}]

  return(
  <>
  {
    films.map((item) => (
      <Profile titre={item.titre} acteur={item.acteur} image={item.image} />
    ) )
}
    
  </>
  )
}

export default App;
