import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: var(--home);
    padding: 11px 16px;
    height: 100%;
`;

export const SearchForm = styled.form`
    padding-left: 16px;
    width: 100%;

    input {
        background: var(--search);
        outline: 0;
        border-radius: 6px;
        padding: 7px 12px;
        color: white;
    }

    > h3 {
        color: white;
        margin-bottom: 5px;
    }
`;

export const SubmitButton = styled.button`
    margin-left: 15px;
    background-color: lightgray;
    padding: 6px;
    border-radius: 10px;
`;