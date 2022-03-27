import { ArgsType, Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

// @InputType()
@ArgsType()
export class UserCreateWithoutPostInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    name?: string;
}
