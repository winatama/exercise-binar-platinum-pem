import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <SearchForm />
    </div>
  );
}

function SearchResults() {
  // Fetch search query from URL
  const { query } = useParams();

  // Perform search based on query

  return (
    <div>
      <h1>Search Results</h1>
      <p>Showing results for: {query}</p>
      {/* Display search results */}
    </div>
  );
}