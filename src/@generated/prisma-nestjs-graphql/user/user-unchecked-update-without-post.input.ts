import { Field, ID } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdateWithoutPostInput } from './user-update-without-post.input';

@InputType()
export class UserUncheckedUpdateWithoutPostInput {

    @Field(() => ID, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    email?: String;

    @Field(() => String, {nullable:true})
    name?: String;

    @Field(() => UserUpdateWithoutPostInput, {nullable:true})
    condition?: UserUpdateWithoutPostInput;
}
