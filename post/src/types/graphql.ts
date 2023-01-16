
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreatePostInput {
    title: string;
    body: string;
    userId?: Nullable<number>;
}

export class UpdatePostInput {
    id: number;
    title: string;
    body: string;
}

export class Post {
    id: number;
    title: string;
    body: string;
    userId: number;
    user?: Nullable<User>;
}

export abstract class IQuery {
    abstract posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;

    abstract post(id: number): Nullable<Post> | Promise<Nullable<Post>>;
}

export abstract class IMutation {
    abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;

    abstract removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;
}

export class User {
    id: number;
    posts?: Nullable<Nullable<Post>[]>;
}

type Nullable<T> = T | null;
