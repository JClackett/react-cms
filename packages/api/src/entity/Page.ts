import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

import { Collection } from ".";

@Entity("pages")
@ObjectType()
export default class Page extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn("uuid")
	id: number;

	@Field(() => String)
	@Column("text", { unique: true })
	name: string;

	@Field(() => String)
	@Column("text", { unique: true })
	slug: string;

	@Field(() => [Collection])
	@OneToMany(() => Collection, collection => collection.page)
	collections: Collection[];
}
