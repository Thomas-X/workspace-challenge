import React, { FC } from 'react';
import { Modal } from '@fluentui/react/lib/Modal';
import { Text } from '@fluentui/react/lib/Text';
import { useBuyStore } from '../../../core/stores/useBuyStore';

interface Props {}

export const BuyModal: FC<Props> = () => {
  const isOpen = useBuyStore((state) => state.isOpen);
  const toggleModal = useBuyStore((state) => state.toggle);
  return (
    <Modal isOpen={isOpen} onDismiss={toggleModal} isBlocking={false}>
      <Text variant='xLarge'>yello</Text>
    </Modal>
  );
};
