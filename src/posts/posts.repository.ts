import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { Post } from './Entities/post.entity'
import { CreatePostDto } from './DTO/createPost.dto'

@Injectable()
export class PostsRepository {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ) {}

  async getAllPosts(): Promise<Post[] | undefined> {
    return await this.postsRepository.find()
  }

  async getPostByID(id: number): Promise<Post | undefined> {
    return await this.postsRepository.findOne({
      where: { id: id },
    })
  }

  async createPost(post: CreatePostDto): Promise<Post> {
    const newPost = await this.postsRepository.create(post);
    await this.postsRepository.save(newPost);
    return newPost;
  }
}
