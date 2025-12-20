import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

const Users = pgTable('users', {
    id : serial('id').primaryKey(),
    name: varchar('name').notNull(),
    email: varchar('email').notNull(),
    imageUrl: varchar('imageUrl').notNull(),
    credits: integer('credits').default(3)
})

export default Users