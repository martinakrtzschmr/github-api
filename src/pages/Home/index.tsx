import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, SearchForm, SubmitButton, LabelText } from './styles';

const Home: React.FC = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        navigate(`/${search.toLocaleLowerCase().trim()}`);
    }

    return (
        <Container>
            <div>
                <SearchForm onSubmit={handleSubmit}>
                    <LabelText htmlFor='search-input'>Search for a Github User:</LabelText>
                    <input
                        id='search-input'
                        placeholder='Enter username or Repo'
                        value={search}
                        onChange={e => setSearch(e.currentTarget.value)}
                    />
                    <SubmitButton onSubmit={handleSubmit}>OK</SubmitButton>
                </SearchForm>
            </div>
        </Container>
    )
};

export default Home;