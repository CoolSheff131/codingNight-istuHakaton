import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/search/:title')
  getHello(@Param('title') title: string) {
    return this.appService.search(title);
  }
}
