import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

const Profile: React.FC = () => {
    return (
        <Container>
            <Main>
                <LeftSide></LeftSide>
                <RightSide></RightSide>
            </Main>
        </Container>
    )
};

export default Profile;