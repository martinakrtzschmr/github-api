import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GithubRepo, GithubUser } from '../../@types';
import axios from 'axios';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  RepoIcon,
  Tab,
  BackButton,
  BackIcon
} from './styles';
import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import github from "../../services/github";

interface Data {
  user?: GithubUser;
  repos?: GithubRepo[];
  error?: string;
}

const Profile: React.FC = () => {
  const { username = 'rhivia' } = useParams();
  const [data, setData] = useState<Data>();
  const navigate = useNavigate();

  const requestOne = github.get(`/users/${username}`);
  const requestTwo = github.get(`/users/${username}/repos`);

  useEffect(() => {
    axios.all([requestOne, requestTwo])
    .then(axios.spread((...responses) => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({error: 'User not found!'});
        return;
      }

      const user = userResponse.data;
      const repos = reposResponse.data;

      setData({user, repos});
    }))
    .catch((err) => {
      console.log(err);
    })
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>
  }

  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>
  }

  const TabContent = () => {
    return <div className='content'>
      <RepoIcon />
      <span className='label'>Repositories</span>
      <span className='numbers'>{data.user?.public_repos}</span>
    </div>
  };

  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          />
          <BackButton onClick={() => navigate(-1)}>
            <BackIcon />
            <span>Back</span>
          </BackButton>
        </LeftSide>
        <RightSide>
          <Tab className='mobile'>
            <TabContent />
            <span className='line' />
          </Tab>
          <Repos>
            <h2>Repos</h2>

            <div>
              {data.repos.map((repo) => (
                <RepoCard
                  key={repo.name}
                  username={repo.owner.login}
                  reponame={repo.name}
                  description={repo.description}
                  language={repo.language}
                  stars={repo.stargazers_count}
                  forks={repo.forks}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  )
};

export default Profile;