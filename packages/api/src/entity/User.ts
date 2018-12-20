import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity("users")
@ObjectType()
export default class User extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn("uuid")
	id: number;

	@Field()
	@Column("text", { unique: true })
	name: string;

	@Field()
	@Column("text")
	password: string;
}
