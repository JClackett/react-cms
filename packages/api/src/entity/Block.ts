import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne
} from "typeorm";
import { Page } from ".";

@Entity("blocks")
export default class Block extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("enum", {
    enum: ["header", "subheader", "paragraph", "image", "button"]
  })
  type: string;

  @Column("text", { nullable: true })
  content: string;

  @ManyToOne(() => Page, page => page.blocks)
  page: Page;
}
