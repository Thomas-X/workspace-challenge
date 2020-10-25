import React, { FC, FormEvent, useCallback } from 'react';
import { Text } from '@fluentui/react/lib/Text';
import { IconButton } from '@fluentui/react/lib/Button';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { TextField } from '@fluentui/react/lib/TextField';
import styled, { css } from 'styled-components';
import { ImageSelector } from './ImageSelector';
import { ShopItem } from '../../../../core/data/models/ShopItem';
import { useBuyStore } from '../../../../core/stores/useBuyStore';
import { useItemsStore } from '../../../../core/stores/useItemsStore';

interface Props {
  item: ShopItem;
  last: boolean;
}

export const ItemRow: FC<Props> = ({ item, last }) => {
  const [onCount, items] = useItemsStore((state) => [
    state.onCount,
    state.items,
  ]);
  const onAdd = useCallback(() => {
    onCount(item.id, items[item.id] ? items[item.id] + 1 : 1);
  }, [item.id, items, onCount]);
  const onSubtract = useCallback(() => {
    if (items[item.id]) {
      if (items[item.id] - 1 < 0) {
        return;
      }
    }
    onCount(item.id, items[item.id] ? items[item.id] - 1 : 0);
  }, [item.id, items, onCount]);
  const onCountChange = useCallback(
    (e) => {
      if (e.target.value >= 0) {
        onCount(item.id, e.target.value);
      }
    },
    [item.id, onCount]
  );
  const onCountBlur = useCallback(() => {
    // == because we want to catch null too
    // eslint-disable-next-line eqeqeq
    if (items[item.id] == undefined || String(items[item.id]) === '') {
      onCount(item.id, 0);
    }
  }, [item, items, onCount]);
  return (
    <ItemContainer key={item.id} last={last}>
      <LeftContainer>
        <ImageSelector imageName={item.image} />
        <Text
          variant='medium'
          block
          nowrap
          style={{
            marginLeft: '10px',
          }}
        >
          {item.name}
        </Text>
      </LeftContainer>
      <RightContainer>
        <AddContainer>
          <IconButton title='Remove' ariaLabel='Remove' onClick={onSubtract}>
            <FontIcon iconName='Remove' />
          </IconButton>
          <NumberTextField
            style={{ margin: '0 10px' }}
            value={String(items[item.id] ?? 0)}
            onChange={onCountChange}
            onBlur={onCountBlur}
            type='number'
            min='0'
          />
          <IconButton title='Add' ariaLabel='Add' onClick={onAdd}>
            <FontIcon iconName='Add' />
          </IconButton>
        </AddContainer>
        <Text
          variant='medium'
          style={{ width: '90px', marginLeft: '10px', textAlign: 'end' }}
        >
          {item.price} gold
        </Text>
      </RightContainer>
    </ItemContainer>
  );
};
const flexCenter = css`
  display: flex;
  align-items: center;
`;

const NumberTextField = styled(TextField)`
  margin: 0 10px;
  width: 80px;
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
