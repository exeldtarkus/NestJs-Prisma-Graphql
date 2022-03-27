import { Module } from '@nestjs/common';
import { ConnectionPrisma } from 'prisma/connection.prisma';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, ConnectionPrisma, UserResolver],
})
export class UserModule {}
