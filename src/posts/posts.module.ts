import { Module } from "@nestjs/common"
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Post } from "./Entities/post.entity"
import { TypeOrmModule } from "@nestjs/typeorm"
import { PostsRepository } from "./posts.repository"

@Module({
    imports: [TypeOrmModule.forFeature([Post])],
    controllers: [PostsController],
    providers: [PostsService, PostsRepository]
})
export class PostsModule {}