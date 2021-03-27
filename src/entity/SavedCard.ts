import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { modelSavedCard } from "../models/modelSavedCard";
import { Merchant } from "./Merchant";

@Entity(modelSavedCard.TABLE_SAVED_CARD_WITHOUT_SCHEMA)
export class SavedCard {

    @PrimaryGeneratedColumn({ type: "int4" })
    id: number;

    @ManyToOne(() => Merchant, merchant => merchant.savedCards, { onDelete: 'CASCADE' })
    merchant: Merchant;

    @Column({name: modelSavedCard.columns.CARD_USER_KEY, type: "uuid"})
    cardUserKey: string;

    @Column({name: modelSavedCard.columns.CARD_TOKEN, type: "uuid"})
    cardToken: string;

    @Column({ name: modelSavedCard.columns.CREATED_AT, type: "timestamptz" })
    createdAt: Date;
}