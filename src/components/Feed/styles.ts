import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;

  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: none;

  text-align: center;

  border-bottom: 2px solid var(--twitter);
  color: var(--twitter);

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
