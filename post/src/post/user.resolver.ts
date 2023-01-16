import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { User } from './user.interfaces';

@Resolver('User')
export class UserResolver {
  constructor(private readonly postService: PostService) {}

  @ResolveField('posts')
  public posts(@Parent() user: User) {
    return this.postService.findOneByAuthorId(user.id);
  }
}
