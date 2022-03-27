import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from './user.model';
import { Post } from '../post/post.model';
import { UserCount } from './user-count.output';
import { UserCreateWithoutPostInput } from './user-create-without-post.input';

@InputType()
export class updatedOnlyUser {

    // @Field(() => Number, {nullable:false})
    // id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    // @Field(() => UserCreateWithoutPostInput, {nullable:true})
    // data!: UserCreateWithoutPostInput

}

