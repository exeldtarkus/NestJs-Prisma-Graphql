import { Param } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { DeleteOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/delete-one-user.args';
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args';
import { UpdateOneUserWithoutPostArgs } from 'src/@generated/prisma-nestjs-graphql/user/update-one-user-without-post.args';
import { UpdateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/update-one-user.args';
import { updatedOnlyUser } from 'src/@generated/prisma-nestjs-graphql/user/updated-onlyUser';
import { UserCreateWithoutPostInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create-without-post.input';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { UserUpdateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-update.input';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {

    constructor ( private userService : UserService ) {}

    @Query(returns => [User])
    showAllUser () {
        return this.userService.getAllUserGql();
    }

    @Query(returns => [User])
    showDetailUser (@Args() param : FindManyUserArgs ) {
        return this.userService.getDetailUser(param);
    }

    @Mutation(returns => User)
    insertData( @Args() data : CreateOneUserArgs) {
        return this.userService.inserUserGql(data)
    }


    @Mutation(returns => User)
    updateData(@Args('updatedOnlyUser') updateDataUser : UpdateOneUserWithoutPostArgs) {
        return this.userService.updateUserGql(updateDataUser)
    }

    @Mutation(returns => User)
    deletedData(@Args('deletedUser') condition : DeleteOneUserArgs) {

        return this.userService.deletedUserGql(condition)
    }

}
