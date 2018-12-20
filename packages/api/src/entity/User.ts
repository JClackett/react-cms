import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("users")
export default class User extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id: number;

	@Column("text", { unique: true })
	name: string;

	@Column("text")
	password: string;
}
