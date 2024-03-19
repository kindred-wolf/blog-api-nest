import { Module } from '@nestjs/common';
import { AuthenticationController } from './AuthenticationController';
import { AuthenticationService } from './AuthenticationService';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './Entity/UserEntity'
import { UserDataDto } from './Dto/UserDataDto'
import { AuthenticationRepository } from './AuthenticationRepository'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), UserDataDto],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, AuthenticationRepository]
})
export class AuthenticationModule {}