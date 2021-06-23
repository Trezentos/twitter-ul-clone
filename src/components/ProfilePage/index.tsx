import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  FollowAge,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Gustavo Fagundes</h1>
        <h2>@gustavofgds</h2>

        <p>
          Developer at <a href="http://grupow.com.br">GrupoW</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Santa Catarina, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 11 de junho de 1998
          </li>
        </ul>

        <FollowAge>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>100</strong> seguidores.
          </span>
        </FollowAge>

        <Feed />
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
