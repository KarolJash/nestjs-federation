import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostInput, UpdatePostInput } from 'src/types/graphql';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  create({ title, body, userId }: CreatePostInput) {
    return this.prisma.post.create({
      data: { title, body, userId },
    });
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  findOneByAuthorId(userId: number) {
    return this.prisma.post.findMany({
      where: {
        userId,
      },
    });
  }

  update(id: number, { title, body }: UpdatePostInput) {
    return this.prisma.post.update({
      where: { id },
      data: { title, body },
    });
  }

  remove(id: number) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
