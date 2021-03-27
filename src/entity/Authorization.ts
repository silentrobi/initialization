import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { modelAuthorization } from "../models/modelAuthorization";

@Entity(modelAuthorization.TABLE_AUTHORIZATION_WITHOUT_SCHEMA)
export class Authorization {

    @PrimaryGeneratedColumn({ type: "int4" })
    id: number;

    @Column({name: modelAuthorization.columns.GSM, type: "varchar", length: 15})
    gsm: string;

    @Column({name: modelAuthorization.columns.CODE, type: "varchar", length: 5})
    code: string;

    @Column({name: modelAuthorization.columns.TYPE, type: "int4"})
    type: number;

    @Column({name: modelAuthorization.columns.EXPIRATION_DATE, type: "timestamptz"})
    expirationDate: Date;

    @Column({name: modelAuthorization.columns.ACCEPTED_DATE, type: "timestamptz", nullable: true})
    acceptedDate: Date;
}