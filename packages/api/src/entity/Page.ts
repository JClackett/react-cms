import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable
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

  @ManyToMany(() => Collection, collection => collection.pages, {
    cascade: true
  })
  @JoinTable({
    name: "_page_collections"
  })
  collections: Collection[];
}
