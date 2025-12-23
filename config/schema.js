import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

const Users = pgTable('users', {
    id : serial('id').primaryKey(),
    name: varchar('name').notNull(),
    email: varchar('email').notNull(),
    imageUrl: varchar('imageUrl').notNull(),
    credits: integer('credits').default(3)
})

export const AiGeneratedImage = pgTable('aiGeneratedImage', {
    id: serial('id').primaryKey(),
    roomType: varchar('roomType').notNull(),
    designType: varchar('designType').notNull(),
    aiImage: varchar('aiImage').notNull(),
    originalImage: varchar('originalImage').notNull(),
    email: varchar('email'),
    createdAt: timestamp("created_at").defaultNow(),

})

export default Users