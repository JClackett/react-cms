import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToMany
} from "typeorm";
import { Page, Block } from ".";

@Entity("collections")
export default class Collection extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("text")
  name: string;

  @ManyToMany(() => Page, page => page.collections)
  pages: Page[];

  @OneToMany(() => Block, block => block.collection)
  blocks: Block[];
}
