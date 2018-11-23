import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany
} from "typeorm";
import { Block } from ".";

@Entity("pages")
export default class Page extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("text", { unique: true })
  name: string;

  @Column("text", { unique: true })
  slug: string;

  @OneToMany(() => Block, block => block.page)
  blocks: Block[];
}
