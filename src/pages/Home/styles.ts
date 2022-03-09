import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: var(--home);
    padding: 11px 16px;
`;

export const SearchForm = styled.form`
    padding-left: 16px;
    width: 100%;

    input {
        background: var(--search);
        outline: 0;
        border-radius: 6px;
        padding: 7px 12px;
    }
`;