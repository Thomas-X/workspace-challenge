import React, { FC, useEffect, useMemo } from 'react';
import { Modal } from '@fluentui/react/lib/Modal';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { Text } from '@fluentui/react/lib/Text';
import styled, { css } from 'styled-components';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { useQuery } from 'react-query';
import shallow from 'zustand/shallow';
import { MessageBar, MessageBarType } from '@fluentui/react/lib/MessageBar';
import { useBuyStore } from '../../../../core/stores/useBuyStore';
import { QueryKeys } from '../../../../core/data/QueryKeys';
import { getItems } from '../../../../core/data/fetchers/getItems';
import { ImageSelector } from './ImageSelector';
import { ItemRow } from './ItemRow';
import { useItemsStore } from '../../../../core/stores/useItemsStore';
import { NoItems } from '../../../components/NoItems';

interface Props {}

export const BuyModal: FC<Props> = () => {
  const money = useItemsStore((state) => state.money);
  const [isOpen, toggleModal] = useBuyStore((state) => [
    state.isOpen,
    state.toggle,
  ]);
  const { data: items = [], isFetching: itemsFetching } = useQuery(
    QueryKeys.items,
    getItems
  );
  const countItems = useItemsStore((state) => state.items);
  const sum = useMemo(() => {
    let v = 0;
    for (const [id, count] of Object.entries(countItems)) {
      const dataItem = items.find((x) => x.id === id);
      if (dataItem) {
        v += count * dataItem.price;
      }
    }
    return v;
  }, [countItems, items]);
  const itemsBought = useMemo(() => {
    return {
      basket: countItems,
      items: Object.values(items).filter(
        (x) => Object.keys(countItems).filter((y) => y === x.id)[0]
      ),
    };
  }, [countItems, items]);
  const noItems = useMemo(
    () => (!items || items.length === 0) && !itemsFetching,
    [items, itemsFetching]
  );
  return (
    <Modal
      isOpen={isOpen}
      onDismiss={toggleModal}
      isBlocking={false}
      allowTouchBodyScroll={false}
      styles={{
        main: {
          flex: '.8 .8 auto',
          padding: '40px',
          '@media (max-width: 480px)': {
            padding: '20px',
          },
        },
        scrollableContent: {
          // strange overrides needed from fluentui.... not a great first-experience so far
          overflowY: 'initial !important',
          maxHeight: 'initial !important',
        },
      }}
    >
      <Container>
        <Header>
          <Text variant='xxLarge'>Order</Text>
          <ClearIcon iconName='Clear' onClick={toggleModal} />
        </Header>
        {noItems && <NoItems />}
        {items.map((item, idx) => (
          <ItemRow item={item} last={idx === items.length - 1} />
        ))}
        <Total
          style={{
            margin: '10px 0 20px 0',
          }}
        >
          <Text variant='xLarge'>Total</Text>
          <Text variant='xLarge'>{sum} gold</Text>
        </Total>
        <Total
          style={{
            margin: '40px 0 60px 0',
          }}
        >
          <Text variant='xLarge'>Your balance</Text>
          <Text variant='xLarge'>{money} gold</Text>
        </Total>

        {sum > money && (
          <MessageBar
            messageBarType={MessageBarType.warning}
            styles={{
              root: {
                marginBottom: '10px',
              },
            }}
          >
            You don't have enough balance to complete this order, remove some
            items to continue.
          </MessageBar>
        )}

        <ButtonContainer>
          <PrimaryButton
            disabled={sum > money || noItems || sum <= 0}
            style={{ marginRight: '10px' }}
            onClick={() =>
              // eslint-disable-next-line no-alert
              alert(`You bought ${JSON.stringify(itemsBought, null, 4)}`)
            }
          >
            Buy
          </PrimaryButton>
          <DefaultButton onClick={toggleModal}>Cancel</DefaultButton>
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 60px 0;
`;

const ClearIcon = styled(FontIcon)`
  font-size: 24px;
  width: 24px;
  height: 24px;
  :hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  overflow-y: initial !important;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
