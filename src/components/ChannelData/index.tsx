import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import * as S from './styled';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <S.Container>
      <S.Messages ref={messagesRef}>
        {Array.from(Array(15)).map((n) => (
          <ChannelMessage
            key={n}
            author="Guilherme Rodz"
            date="21/06/2020"
            content="Hoje é meu aniversário"
          />
        ))}

        <ChannelMessage
          author="Diego Fernandes"
          date="21/06/2020"
          content={
            <>
              <Mention> @Guilherme Rodz </Mention>, me carrega no LoL e CS de
              novo por favor?
            </>
          }
          hasMention
          isBot
        />
      </S.Messages>

      <S.InputWrapper>
        <S.Input type="text" placeholder="Conversar em chat livre" />
        <S.InputIcon />
      </S.InputWrapper>
    </S.Container>
  );
};

export default ChannelData;
