import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PostService } from './post.service';
import { CreatePostInput, UpdatePostInput } from 'src/types/graphql';
import { Post } from './post.interfaces';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation('createPost')
  create(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(createPostInput);
  }

  @Query('posts')
  findAll() {
    console.log('I want to say this one');
    return this.postService.findAll();
  }

  @Query('post')
  findOne(@Args('id') id: number) {
    return this.postService.findOne(id);
  }

  @ResolveField('user')
  user(@Parent() post: Post): any {
    return { __typename: 'User', id: post.userId };
  }

  @Mutation('updatePost')
  update(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postService.update(updatePostInput.id, updatePostInput);
  }

  @Mutation('removePost')
  remove(@Args('id') id: number) {
    return this.postService.remove(id);
  }
}
