import React, { FC, useCallback } from 'react';
import { Text } from '@fluentui/react/lib/Text';
import { Separator } from '@fluentui/react/lib/Separator';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ROUTES } from '../../routes';
import { useBuyStore } from '../../core/stores/useBuyStore';
import { QueryKeys } from '../../core/data/QueryKeys';
import { getMe } from '../../core/data/fetchers/getMe';

interface Props {}

export const Nav: FC<Props> = () => {
  const toggleModal = useBuyStore((state) => state.toggle);
  const { data: me, isFetching: meFetching, error: meError } = useQuery(
    QueryKeys.me,
    getMe
  );
  const onBuyClick = useCallback(() => {
    toggleModal();
  }, [toggleModal]);
  return (
    <NavContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <NavItem variant='large'>Home</NavItem>
        </Link>
        <Separator vertical={true} />
        <PrimaryButton
          text='Buy'
          allowDisabledFocus
          onClick={onBuyClick}
          style={{ marginLeft: '1rem' }}
        />
      </div>
      <NavItem variant='large'>{me?.balance} coins</NavItem>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
  background-color: whitesmoke;
  box-shadow: 0 10px 13px -2px rgba(0, 0, 0, 0.16);
`;

const NavItem = styled(Text)`
  padding: 1rem;
`;
