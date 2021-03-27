import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { modelCountry } from "../models/modelCountry";
import { City } from "./City";

@Entity(modelCountry.TABLE_COUNTRY_WITHOUT_SCHEMA)
export class Country {

    @PrimaryGeneratedColumn({ type: "int4" })
    id: string;

    @Column({ name: modelCountry.columns.NAME, type: "varchar" })
    name: string;

    @OneToMany(() => City, city => city.country)
    cities: City[];
}