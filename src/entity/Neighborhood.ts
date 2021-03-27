import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { modelNeighborhood } from "../models/modelNeighborhood";
import { CitySubdivision } from "./CitySubdivision";

@Entity(modelNeighborhood.TABLE_NEIGHBORHOOD_WITHOUT_SCHEMA)
export class Neighborhood {

    @PrimaryGeneratedColumn({ type: "int8" })
    id: number;

    @Column({ name: modelNeighborhood.columns.NAME, type: "varchar" })
    name: string;

    @Column({ name: modelNeighborhood.columns.POSTAL_CODE, type: "varchar", length: 10, nullable: true })
    postalCode: string;

    @ManyToOne(() => CitySubdivision, citySubdivision => citySubdivision.neighborhoods, { onDelete: 'CASCADE' })
    citySubdivision: CitySubdivision;
}