import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput, UpdateUserInput } from 'src/types/graphql';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create({ name }: CreateUserInput) {
    return this.prisma.user.create({
      data: { name },
    });
  }

  findOne(id: number) {
    console.log(id);
    return this.prisma.user.findUnique({
      where: { id },
      select: { name: true, id: true },
    });
  }

  update(id: number, { name }: UpdateUserInput) {
    return this.prisma.user.update({
      where: { id },
      data: { name },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
