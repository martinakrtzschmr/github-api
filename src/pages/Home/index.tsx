import React from 'react';

import { Container, SearchForm } from './styles';

const Home: React.FC = () => {
    return <div>
        <p>Home</p>
        <SearchForm>
            <input placeholder='Enter username or Repo' />
        </SearchForm>
    </div>
};

export default Home;