import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne
} from "typeorm";
import { Page, Block } from ".";

@Entity("collections")
export default class Collection extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("text")
  name: string;

  @ManyToOne(() => Page, page => page.collections, {
    onDelete: "CASCADE"
  })
  page: Page;

  @OneToMany(() => Block, block => block.collection)
  blocks: Block[];
}
