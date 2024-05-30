import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}