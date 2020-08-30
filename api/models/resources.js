const db = require('../../data/dbConfig')

const getResources = () => {
    return db('resources').select('*')
}

const getResourceById = (id) => {
    return db('resources').where({ id }).first()
}

const insertResource = (data) => {
    return db('resources').insert(data)
                          .then(id => {
                            return getResourceById(id)
                          })
}

module.exports = {
    getResources,
    getResourceById,
    insertResource
}