import { createRoutesFromElements, BrowserRouter, Routes, Route } from 'react-router-dom';

// Define your route components
function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function App() {
  // Create an array of route JSX elements
  const routeElements = [
    <Route key="home" path="/" element={<Home />} />,
    <Route key="about" path="/about" element={<About />} />
  ];

  // Use createRoutesFromElements to create routes from JSX elements
  const routes = createRoutesFromElements(routeElements);

  return (
    <BrowserRouter>
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
}

export default App;