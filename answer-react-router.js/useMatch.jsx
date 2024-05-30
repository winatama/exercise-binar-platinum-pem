import { BrowserRouter, Routes, Route, useMatch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <RouteWithProps path="/" element={<Home />} />
        <RouteWithProps path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

function RouteWithProps({ path, element }) {
  const match = useMatch(path);
  return React.cloneElement(element, { path: match.path });
}

function Home({ path }) {
  return (
    <div>
      <h1>Home</h1>
      <p>Path: {path}</p>
    </div>
  );
}

function About({ path }) {
  return (
    <div>
      <h1>About</h1>
      <p>Path: {path}</p>
    </div>
  );
}
