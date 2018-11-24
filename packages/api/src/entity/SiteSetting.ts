import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("siteSettings")
export default class SiteSetting extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("text", { unique: true })
  name: string;

  @Column("text")
  value: string;
}
