import { useState } from 'react';
import Profile from './Profile';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const themes = ['light', 'dark', 'cupcake', 'cyberpunk', 'forest'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return;
  <>
    <Profile titre="hello" />
  </>;
}

export default App;
