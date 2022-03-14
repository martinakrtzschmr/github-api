import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import { GithubRepo } from '../../@types';
import github from "../../services/github";

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
    const { user = '' } = useParams();
    const { repo = '' } = useParams();
    const [data, setData] = useState<GithubRepo>();
    const navigate = useNavigate();

    useEffect(() => {
        github.get(`/repos/${user}/${repo}`)
        .then(response => setData(response.data))
    }, [user, repo]);

    return (
        <Container>
            <Breadcrumb>
                <RepoIcon />
                <Link className='username' to={`/${user}`}>
                    {user}
                </Link>

                <span>/</span>

                <Link className='reponame' to={`/${user}/${repo}`}>
                    {repo}
                </Link>
            </Breadcrumb>

            <Info>
                <li>
                    <StarIcon />
                    <b>{data?.stargazers_count}</b>
                    <span>stars</span>
                </li>
                <li>
                    <ForkIcon />
                    <b>{data?.forks}</b>
                    <span>forks</span>
                </li>
            </Info>

            <Info>
                <li>
                    {data?.description ? 'Description:' : 'No description'}
                </li>
                <p>
                    {data?.description ? data?.description : ''}
                </p>
            </Info>

            <BackButton onClick={() => navigate(-1)}>
                <BackIcon />
                <span>Back</span>
            </BackButton>
        </Container>
    )
};

export default Repo;