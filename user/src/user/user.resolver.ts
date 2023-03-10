import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { CreateUserInput, UpdateUserInput } from 'src/types/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.userService.findOne(id);
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.userService.remove(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }) {
    return this.userService.findOne(reference.id);
  }
}
