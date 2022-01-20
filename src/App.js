import { useState } from 'react';

import './App.css';

function App() {
  const [tags] = useState([
    { text: 'JavaScript', level: '★★★★' },
    { text: 'TypeScript', level: '★★★' },
    { text: 'React', level: '★★★★' },
    { text: 'Redux', level: '★★★★' },
    { text: 'HTML + CSS', level: '★★★★' },
    { text: 'SCSS', level: '★★★' },
    { text: 'БЭМ', level: '★★★★' },
    { text: 'Socket.io', level: '★★' },
    { text: 'Git', level: '★★★' },
    { text: 'Webpack', level: '★★' },
    { text: 'Node.js', level: '★★★' },
    { text: 'Express.js', level: '★★★' },
    { text: 'Postman', level: '★★★' },
  ]);
  const [isHover, setIsHover] = useState(null);

  function handleMouseEvent(id) {
    setIsHover(id);
  }

  return (
    <main className="main">
      <div className="tags main__tags">
        {tags.map((i, id) => (
          <span
            className="tags__span"
            onMouseEnter={handleMouseEvent.bind(null, id)}
            onMouseLeave={handleMouseEvent.bind(null, null)}
          >
            {isHover === id ? i.level : i.text}
          </span>
        ))}
      </div>
    </main>
  );
}

export default App;
