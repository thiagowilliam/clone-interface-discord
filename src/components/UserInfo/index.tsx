import React from 'react';

import * as S from './styled';

const UserInfo: React.FC = () => {
  return (
    <S.Container>
      <S.Profile>
        <S.Avatar />
        <S.UserData>
          <strong>Thiago William</strong>
          <span>#2689</span>
        </S.UserData>
      </S.Profile>

      <S.Icons>
        <S.MicIcon />
        <S.HeadphoneIcon />
        <S.SettingsIcon />
      </S.Icons>
    </S.Container>
  );
};

export default UserInfo;
