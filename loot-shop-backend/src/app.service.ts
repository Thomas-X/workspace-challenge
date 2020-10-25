import { Injectable } from '@nestjs/common';
import { User } from './models/User';
import { random } from 'lodash';

import { nanoid } from 'nanoid';
import { ShopItem } from './models/ShopItem';
@Injectable()
export class AppService {
  private static pickRandom(arr: any[]) {
    return arr[random(0, arr.length - 1)];
  }

  getUser(): User {
    return {
      id: nanoid(),
      balance: random(300, 1000),
      login: require('faker').internet.email(),
    };
  }

  getItems(): ShopItem[] {
    const modifiers = [
      'Legendary',
      'Golden',
      'Bad',
      'Shoddy',
      'Well-made',
      'Common',
      'Rare',
      'Uncommon',
      'Ultra-rare',
      'Uber-rare',
    ];
    // labeled tuples are not here yet :(
    const names = [
      ['Bronze sword: low quality, low price', 'bronze_sword.png'],
      ['Wooden shield', 'wooden_shield.png'],
      ['Battle axe', 'battle_axe.png'],
      ['Longsword, carefully crafted to slay your enemies', 'longsword.png'],
    ];

    const items = Array(random(4, 8))
      .fill(null)
      .map(() => {
        const item = AppService.pickRandom(names);
        return {
          id: nanoid(),
          name: `${AppService.pickRandom(modifiers)} - ${item[0]}`,
          price: random(10, 100),
          quantity: random(1, 42),
          image: item[1],
        };
      });

    return random(0, 100) < 25 ? [] : items;
  }
}
