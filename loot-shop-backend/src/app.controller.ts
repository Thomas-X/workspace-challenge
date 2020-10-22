import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './models/User';
import { ShopItem } from './models/ShopItem';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*
   * Super-real user endpoint, normally we'd use a JWT token and some auth layer or similar to identify the user
   * */
  @Get('/me')
  getUser(): User {
    return this.appService.getUser();
  }

  @Get('/items')
  getItems(): ShopItem[] {
    return this.appService.getItems();
  }
}
