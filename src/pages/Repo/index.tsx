import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
    Container,
    Breadcrumb,
    Info,
    BackButton,
    RepoIcon,
    StarIcon,
    ForkIcon,
    BackIcon
 } from './styles';

const Repo: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Breadcrumb>
                <RepoIcon />
                <Link className='username' to={'/martinak'}>
                    Repository
                </Link>

                <span>/</span>

                <Link className='reponame' to={'/martinak/repository'}>
                    github-api
                </Link>
            </Breadcrumb>

            <p>User profiles using Github API.</p>

            <Info>
                <li>
                    <StarIcon />
                    <b>9</b>
                    <span>stars</span>
                </li>
                <li>
                    <ForkIcon />
                    <b>0</b>
                    <span>forks</span>
                </li>
            </Info>

            <BackButton onClick={() => navigate(-1)}>
                <BackIcon />
                <span>Back</span>
            </BackButton>
        </Container>
    )
};

export default Repo;