import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { modelCitysubdivision } from "../models/modelCitysubdivision";
import { City } from "./City";
import { Neighborhood } from "./Neighborhood";

@Entity(modelCitysubdivision.TABLE_CITYSUBDIVISION_WITHOUT_SCHEMA)
export class CitySubdivision {

    @PrimaryGeneratedColumn({ type: "int8" })
    id: number;

    @Column({ name: modelCitysubdivision.columns.NAME, type: "varchar" })
    name: string;

    @ManyToOne(() => City, city => city.citySubdivisions, { onDelete: 'CASCADE' })
    city: City;

    @OneToMany(() => Neighborhood, neighborhood => neighborhood.citySubdivision)
    neighborhoods: Neighborhood[];
}