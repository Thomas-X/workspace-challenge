import React, { FC } from 'react';
import { MessageBar, MessageBarType } from '@fluentui/react/lib/MessageBar';

interface Props {}

export const NoItems: FC<Props> = (props) => {
  return (
    <MessageBar
      messageBarType={MessageBarType.error}
      styles={{
        root: {
          marginBottom: '10px',
        },
      }}
    >
      Sorry, there are no items available due to an error on our end.
    </MessageBar>
  );
};
