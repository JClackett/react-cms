import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne
} from "typeorm";
import { Collection } from ".";

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

  @ManyToOne(() => Collection, collection => collection.blocks, {
    onDelete: "CASCADE"
  })
  collection: Collection;
}
