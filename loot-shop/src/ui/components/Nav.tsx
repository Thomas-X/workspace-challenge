import React, { FC, useCallback } from 'react';
import { Text } from '@fluentui/react/lib/Text';
import { Separator } from '@fluentui/react/lib/Separator';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { ROUTES } from '../../routes';

interface Props {}

export const Nav: FC<Props> = () => {
  const history = useHistory();
  const onBuyClick = useCallback(() => {
    console.log('heyooo');
  }, []);
  return (
    <NavContainer>
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
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const NavItem = styled(Text)`
  padding: 1rem;
`;
