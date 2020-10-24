import React, { FC, useCallback } from 'react';
import { Text } from '@fluentui/react/lib/Text';
import { IconButton } from '@fluentui/react/lib/Button';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { TextField } from '@fluentui/react/lib/TextField';
import styled, { css } from 'styled-components';
import { ImageSelector } from './ImageSelector';
import { ShopItem } from '../../../../core/data/models/ShopItem';
import { useItemsStore } from '../../../../core/stores/useItemsStore';

interface Props {
  item: ShopItem;
  last: boolean;
}

export const ItemRow: FC<Props> = ({ item, last }) => {
  const updateItemCount = useItemsStore((state) => state.updateItemCount);
  const getItem = useItemsStore((state) => state.getItem);
  const onAdd = useCallback(() => {}, []);
  const onSubtract = useCallback(() => {}, []);
  return (
    <ItemContainer key={item.id} last={last}>
      <LeftContainer>
        <ImageSelector imageName={item.image} />
        <Text
          variant='medium'
          style={{
            marginLeft: '10px',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {item.name}
        </Text>
      </LeftContainer>
      <RightContainer>
        <AddContainer>
          <IconButton title='Remove' ariaLabel='Remove'>
            <FontIcon iconName='Remove' />
          </IconButton>
          <TextField style={{ margin: '0 10px' }} />
          <IconButton title='Add' ariaLabel='Add'>
            <FontIcon iconName='Add' />
          </IconButton>
        </AddContainer>
      </RightContainer>
    </ItemContainer>
  );
};
const flexCenter = css`
  display: flex;
  align-items: center;
`;

const LeftContainer = styled.div`
  min-width: 70px;
  ${flexCenter}
`;

const RightContainer = styled.div`
  justify-content: flex-end;
  ${flexCenter}
`;

const AddContainer = styled.div`
  ${flexCenter};
`;

const ItemContainer = styled.div<{ last: boolean }>`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 10px;
  margin-bottom: ${({ last }) => (last ? '40px' : '20px')};
`;
