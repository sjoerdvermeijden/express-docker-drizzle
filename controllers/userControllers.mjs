// import { users } from '../schema.ts'
// import { db } from '../db/db.mjs'

// export const getUsers = async (req, res) => {
//     const result = await db.select().from(users);
//     res.json(result)
// };

export const getUsers = async (req, res) => {
    res.json([
        {
            id: 0,
            name: 'Sjoerd'
        },
        {
            id: 1,
            name: 'Tom'
        }
    ])
};

export const getUser = async (req, res) => {
    res.json({
        id: 0,
        name: 'Sjoerd'
    },)
};