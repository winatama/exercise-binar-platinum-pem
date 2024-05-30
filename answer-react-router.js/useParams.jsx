import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id?" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function User() {
  const { id } = useParams();

  return (
    <div>
      <h1>User</h1>
      {id ? <p>User ID: {id}</p> : <p>No user ID provided</p>}
    </div>
  );
}