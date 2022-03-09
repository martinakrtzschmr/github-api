import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';
import ProfileData from '../../components/ProfileData';

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
                <RightSide></RightSide>
            </Main>
        </Container>
    )
};

export default Profile;