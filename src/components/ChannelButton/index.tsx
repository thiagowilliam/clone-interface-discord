import React from 'react';

import * as S from './styled';

export interface Props {
  channelName?: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <S.Container className={selected ? 'active' : ''}>
      <div>
        <S.HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <S.InviteIcon />
        <S.SettigsIcon />
      </div>
    </S.Container>
  );
};

export default ChannelButton;
