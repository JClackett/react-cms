import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("siteProperties")
export default class SiteProperty extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("text", { unique: true })
  name: string;

  @Column("text")
  value: string;
}
