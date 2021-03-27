import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { modelApplicationCategory } from "../models/modelApplicationCategory";
import { Application } from "./Application";

@Entity(modelApplicationCategory.TABLE_APPLICATION_CATEGORY_WITHOUT_SCHEMA)
export class ApplicationCategory {

    @PrimaryGeneratedColumn({ type: "int4" })
    id: number;

    @Column({ name: modelApplicationCategory.columns.NAME, type: "text", unique: true })
    name: string;

    @Column({ name: modelApplicationCategory.columns.KEY, type: "text", unique: true })
    key: string;

    @OneToMany(() => Application, application => application.applicationCategory)
    applications: Application[];
}