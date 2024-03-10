import { Module } from '@nestjs/common';
import { AuthenticationController } from './AuthenticationController';
import { AuthenticationService } from './AuthenticationService';

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService]
})
export class AuthenticationModule {

}
