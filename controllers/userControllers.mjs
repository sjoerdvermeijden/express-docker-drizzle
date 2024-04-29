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