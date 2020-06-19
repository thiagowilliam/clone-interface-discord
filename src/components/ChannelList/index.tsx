import React from 'react';

import * as S from './styled';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <S.Container>
      <S.Category>
        <span>Canais de texto</span>
        <S.AddCategoryIcon />
      </S.Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="lolzinho" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="valorant" />
    </S.Container>
  );
};

export default ChannelList;
