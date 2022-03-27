import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class UserUpdateWithoutPostInput {

    @Field(() => String, {nullable:true})
    email?: String;

    @Field(() => String, {nullable:true})
    name?: String;
}
