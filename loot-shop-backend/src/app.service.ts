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
    const names = [
      'Bronze sword: low quality, low price',
      'Wooden shield',
      'Battle axe',
      'Longsword, carefully crafted to slay your enemies',
    ];
    return Array(random(10, 50))
      .fill(null)
      .map(() => ({
        id: nanoid(),
        name: `${AppService.pickRandom(modifiers)} - ${AppService.pickRandom(
          names,
        )}`,
        price: random(10, 100),
        quantity: random(1, 42),
      }));
  }
}
