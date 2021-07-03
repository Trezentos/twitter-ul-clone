import React from 'react';

import StickyBox from 'react-sticky-box';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

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
        <SearchInput placeholder="Buscar no Twiter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="talvez você curta"
            elements={[
              <FollowSuggestion name="Anny Ka" nickname="@annyka" />,
              <FollowSuggestion name="GrupoW" nickname="@grupow" />,
              <FollowSuggestion name="Mariane Fagundes" nickname="@mariane" />,
            ]}
          />
          <List
            title="talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
