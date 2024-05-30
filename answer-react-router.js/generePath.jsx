import { BrowserRouter, Routes, Route, MemoryRouter, Link } from 'react-router-dom';

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">About</Link>
    </div>
  );
}

function About() {
  return <h1>About</h1>;
}
