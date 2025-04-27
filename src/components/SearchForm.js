import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getCategories, getTones } from '../api';

const FormContainer = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #1A202C;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #CBD5E0;
  border-radius: 8px;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 2px solid #CBD5E0;
  border-radius: 8px;
  font-size: 16px;
  background-color: white;
`;

const Button = styled.button`
  background-color: #2C7A7B;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #4A9A9B;
  }
`;

const SearchForm = ({ onSubmit, isLoading }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [tone, setTone] = useState('All');
  const [categories, setCategories] = useState(['All']);
  const [tones, setTones] = useState(['All']);

  useEffect(() => {
    const fetchOptions = async () => {
      const [cats, tones] = await Promise.all([
        getCategories(),
        getTones()
      ]);
      setCategories(cats);
      setTones(tones);
    };
    fetchOptions();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query, category, tone);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="query">Please enter a description of a book:</Label>
          <Input
            id="query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., A story about forgiveness"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="category">Select a category:</Label>
          <Select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="tone">Select an emotional tone:</Label>
          <Select
            id="tone"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            {tones.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </Select>
        </FormGroup>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Find Recommendations'}
        </Button>
      </form>
    </FormContainer>
  );
};

export default SearchForm;