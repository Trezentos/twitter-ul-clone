import styled, { css } from 'styled-components';
import { LocationOn, Cake } from '../../styles/icons';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 119px);

  background: var(--twitter);
  position: relative;
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  border-radius: 50%;
  background: var(--gray);

  position: absolute;
  bottom: max(-60px, -10vw);

  left: 15px;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  /* padding: 20px, 67px 16px 0; */

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;

    opacity: 0;
    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }

  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      font-size: 15px;

      color: var(--gray);

      > svg {
        fill: var(--gray);
      }
    }
  }
`;

const iconsCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconsCSS}
`;
export const CakeIcon = styled(Cake)`
  ${iconsCSS}
`;

export const FollowAge = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 0;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 14px;
    font-size: 15px;
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-display: column;
  flex-shrink: 0;
`;

export const Tweet = styled.div``;
