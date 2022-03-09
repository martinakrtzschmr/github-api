import styled, { css } from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork, AiOutlineArrowLeft } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  > p {
    font-size: 16px;
  }
`;

export const Breadcrumb = styled.div`
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;

  font-size: 18px;

  > a {
    color: var(--link);
    text-decoration: none;

    &:hover, &:focus {
      text-decoration: underline;
    }

    &.username {
      margin-left: 8px;
    }

    &.reponame {
      font-weight: 600;
    }
  }
  > span {
    padding: 0 5px;
  }
`;

export const Info = styled.ul`
  margin-top: 16px;
  display: flex;
  align-items: center;

  > li {
    display: flex;
    align-items: center;
    margin-right: 9px;

    > * {
      margin-right: 7px;
      color: var(--gray);
    }
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  margin-top: 24px;
  background: var(--gray-dark);
  padding: 12px 17px;
  border-radius: 24px;
  width: max-content;

  > span {
    color: var(--primary);
  }
  > svg {
    fill: var(--primary);
    margin-right: 10px;
  }
`; // <a hrf="" />

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`${iconCSS}`;

export const StarIcon = styled(RiStarLine)`${iconCSS}`;

export const BackIcon = styled(AiOutlineArrowLeft)`${iconCSS}`;

export const ForkIcon = styled(AiOutlineFork)`${iconCSS}`;
