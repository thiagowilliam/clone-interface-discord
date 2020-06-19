import React from 'react';

import * as S from './styled';

const ChannelInfo: React.FC = () => {
  return (
    <S.Container>
      <S.HashtagIcon />

      <S.Title>Chat-livre</S.Title>

      <S.Separador />
      <S.Description>Canal aberto para conversas</S.Description>
    </S.Container>
  );
};

export default ChannelInfo;
