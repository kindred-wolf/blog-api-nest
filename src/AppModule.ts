import { Module } from '@nestjs/common';
import { PostsModule } from './posts/PostsModule'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './database/DatabaseModule'
import { AuthenticationModule } from './authentication/AuthenticationModule'

@Module({
  imports: [
    PostsModule, 
    AuthenticationModule,
    ConfigModule.forRoot(),
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
