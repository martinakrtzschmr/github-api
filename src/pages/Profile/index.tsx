import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';
import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'rhivia'}
            name={'Martin Alexander'}
            avatarUrl={'https://avatars.githubusercontent.com/u/17728136?v=4'}
            followers={100}
            following={100}
            company={'Lovely Stay'}
            location={'Portugal'}
            email={'alexander.martin64@gmail.com'}
            blog={'linkedin'}
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Repos</h2>

            <div>
              {[1, 2, 3].map(n => (
                <RepoCard
                  key={n}
                  username={'martinak'}
                  reponame={'github-api'}
                  description={'User profiles using Github API.'}
                  language={'Typescript'}
                  stars={8}
                  forks={4}
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