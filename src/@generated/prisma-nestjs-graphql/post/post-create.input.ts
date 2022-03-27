import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPostInput } from '../user/user-create-nested-one-without-post.input';

@InputType()
export class PostCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => UserCreateNestedOneWithoutPostInput, {nullable:true})
    User?: UserCreateNestedOneWithoutPostInput;
}
