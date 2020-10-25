import React, { FC } from 'react';
import styled from 'styled-components';
import battleAxe from '../../../../assets/battle_axe.png';
import bronzeSword from '../../../../assets/bronze_sword.png';
import longSword from '../../../../assets/longsword.png';
import woodenShield from '../../../../assets/wooden_shield.png';

interface Props {
  imageName: string;
}

export const ImageSelector: FC<Props> = ({ imageName }) => {
  let src = battleAxe;
  if (imageName.includes('sword')) {
    src = bronzeSword;
  } else if (imageName.includes('shield')) {
    src = woodenShield;
  } else if (imageName.includes('axe')) {
    src = battleAxe;
  } else if (imageName.includes('Longsword')) {
    src = longSword;
  }

  return <Image src={src} />;
};

const Image = styled.img`
  width: 60px;
  height: 60px;

  @media (max-width: 480px) {
    display: none;
  }
`;
