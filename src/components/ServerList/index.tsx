import React from 'react';

import * as S from './styled';

import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
  return (
    <S.Container>
      <ServerButton isHome />

      <S.Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={99} />
    </S.Container>
  );
};

export default ServerList;
