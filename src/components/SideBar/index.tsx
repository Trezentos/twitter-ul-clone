import React from 'react';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twiiter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <p>{'Loerem ipsum dolor.'.repeat(90)}</p>
      </Body>
    </Container>
  );
};

export default SideBar;
