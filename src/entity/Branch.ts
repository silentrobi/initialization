import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { modelBranch } from "../models/modelBranch";
import { Address } from "./Address";
import { Common } from "./Common";
import { Merchant } from "./Merchant";
import { Terminal } from "./Terminal";

@Entity(modelBranch.TABLE_BRANCH_WITHOUT_SCHEMA)
export class Branch extends Common{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({name: modelBranch.columns.NAME, type: "text"})
    name: string;

    @Column({name: modelBranch.columns.CREATED_BY, type: "varchar", length: 50 })
    createdBy: string;

    @ManyToOne( () => Merchant, merchant => merchant.branches, { onDelete: 'CASCADE' })
    merchant: Merchant;

    @OneToMany(() => Terminal, terminal => terminal.branch)
    terminals: Terminal;

    @OneToMany(() => Address, address => address.branch)
    addresses: Address[];
}