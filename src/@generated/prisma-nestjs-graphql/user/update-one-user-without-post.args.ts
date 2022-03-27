import { Field, InputType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserUpdateWithoutPostInput } from './user-update-without-post.input';
import { UserUpdateInput } from './user-update.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@ArgsType()
@InputType()
export class UpdateOneUserWithoutPostArgs {

    @Field(() => UserUpdateWithoutPostInput, {nullable:false})
    data!: UserUpdateWithoutPostInput;

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;
}
