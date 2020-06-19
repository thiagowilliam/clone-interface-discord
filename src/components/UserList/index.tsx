import React from 'react';

import * as S from './styled';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <S.User>
      <S.Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </S.User>
  );
};

const UserList: React.FC = () => {
  return (
    <S.Container>
      <S.Role>Disponível - 1</S.Role>
      <UserRow nickname="Guilherme Rodz" />

      <S.Role>Offline - 18</S.Role>
      <UserRow nickname="Diego Fernandes" isBot />

      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
    </S.Container>
  );
};

export default UserList;
