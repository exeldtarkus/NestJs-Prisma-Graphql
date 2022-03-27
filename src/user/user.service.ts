import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { ConnectionPrisma } from 'prisma/connection.prisma';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { DeleteOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/delete-one-user.args';
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args';
import { UpdateOneUserWithoutPostArgs } from 'src/@generated/prisma-nestjs-graphql/user/update-one-user-without-post.args';
import { UpdateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/update-one-user.args';
import { updatedOnlyUser } from 'src/@generated/prisma-nestjs-graphql/user/updated-onlyUser';
import { UserCreateWithoutPostInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create-without-post.input';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { UserUncheckedUpdateWithoutPostInput } from 'src/@generated/prisma-nestjs-graphql/user/user-unchecked-update-without-post.input';
import { UserUpdateOneWithoutPostInput } from 'src/@generated/prisma-nestjs-graphql/user/user-update-one-without-post.input';
import { UserUpdateWithoutPostInput } from 'src/@generated/prisma-nestjs-graphql/user/user-update-without-post.input';
import { UserUpdateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-update.input';
import { UserWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/user/user-where-unique.input';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';

@Injectable()
export class UserService {
    
    constructor ( private connectPrisma : ConnectionPrisma ) {}

    getAllUser () {
        return this.connectPrisma.user.findMany();
    }

    getAllUserGql(): Promise<User[]>{
        return this.connectPrisma.user.findMany();
    }

    getDetailUser( param : FindManyUserArgs ): Promise<User[]>{
        return this.connectPrisma.user.findMany(param);
    }

    inserUserGql ( inserUser : CreateOneUserArgs ) {
        console.log(inserUser)
        return this.connectPrisma.user.create({
            data : inserUser.data
        });
    }

    updateUserGql ( updateData : UpdateOneUserWithoutPostArgs ) {
        return this.connectPrisma.user.update({
            where: updateData.where,
            data: updateData.data
        });
    }

    deletedUserGql ( condition : DeleteOneUserArgs) {
        return this.connectPrisma.user.delete({
            where: condition.where
        })
    }

}
