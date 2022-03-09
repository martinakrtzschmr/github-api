import React from 'react';

// import { Container } from './styles';

interface Props {
    username: string;
    name: string;
    avatarUrl: string;
    followers: number;
    following: number;
    company?: string;
    location?: string;
    email?: string;
    blog?: string;
};

const ProfileData: React.FC<Props> = ({
    username,
    name,
    avatarUrl,
    followers,
    following,
    company,
    location,
    email,
    blog,
}) => {
  return (
      <Container>
          <Flex>
              <Avatar />
          </Flex>
      </Container>
  );
}

export default ProfileData;