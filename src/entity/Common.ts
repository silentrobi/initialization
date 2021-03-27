import { Column } from "typeorm";
import { modelCommon } from "../models/common";

export abstract class Common {

    @Column({ name: modelCommon.columns.CREATED_AT, type: "timestamptz", default: 'now()' })
    createdAt: Date;
}