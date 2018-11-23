import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany
} from "typeorm";
import { Collection } from ".";

@Entity("pages")
export default class Page extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("text", { unique: true })
  name: string;

  @Column("text", { unique: true })
  slug: string;

  @OneToMany(() => Collection, collection => collection.page)
  collections: Collection[];
}
