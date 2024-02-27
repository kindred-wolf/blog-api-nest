import { Module } from "@nestjs/common"
import { PostsController } from './PostsController';
import { PostsService } from './PostsService';
import { PostEntity } from "./Entities/PostEntity"
import { TypeOrmModule } from "@nestjs/typeorm"
import { PostsRepository } from "./PostsRepository"

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity])],
    controllers: [PostsController],
    providers: [PostsService, PostsRepository]
})
export class PostsModule {}