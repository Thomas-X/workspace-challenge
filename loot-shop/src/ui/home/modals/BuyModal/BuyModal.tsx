import React, { FC, useEffect } from 'react';
import { Modal } from '@fluentui/react/lib/Modal';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { Text } from '@fluentui/react/lib/Text';
import styled, { css } from 'styled-components';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { useQuery } from 'react-query';
import shallow from 'zustand/shallow';
import { useBuyStore } from '../../../../core/stores/useBuyStore';
import { QueryKeys } from '../../../../core/data/QueryKeys';
import { getItems } from '../../../../core/data/fetchers/getItems';
import { ImageSelector } from './ImageSelector';
import { ItemRow } from './ItemRow';
import { useItemsStore } from '../../../../core/stores/useItemsStore';

interface Props {}

export const BuyModal: FC<Props> = () => {
  const isOpen = useBuyStore((state) => state.isOpen);
  const closeModal = useBuyStore((state) => state.toggle);
  const toggleModal = useBuyStore((state) => state.toggle);
  const { data: items = [] } = useQuery(QueryKeys.items, getItems);
  const setItems = useItemsStore((state) => state.setItems);
  useEffect(() => {
    setItems(items);
  }, [items, setItems]);
  return (
    <Modal
      isOpen={isOpen}
      onDismiss={toggleModal}
      isBlocking={false}
      styles={{
        main: {
          flex: '.8 .8 auto',
        },
      }}
    >
      <Container>
        <Header>
          <Text variant='xxLarge'>Order</Text>
          <ClearIcon iconName='Clear' onClick={closeModal} />
        </Header>
        {items.map((item, idx) => (
          <ItemRow item={item} last={idx === items.length - 1} />
        ))}
      </Container>
    </Modal>
  );
};

const ClearIcon = styled(FontIcon)`
  font-size: 24px;
  width: 24px;
  height: 24px;
  :hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  padding: 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
