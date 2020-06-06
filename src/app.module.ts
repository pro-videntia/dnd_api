import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [ItemsModule, AuthzModule],
})
export class AppModule {}
