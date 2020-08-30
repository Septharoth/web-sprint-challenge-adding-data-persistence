const db = require('../../data/dbConfig')

const getProjects = () => {
    return db('projects').select('*')
}

const getProjectById = (id) => {
    return db('projects').where({id}).first()
}

const insertProject = (data) => {
    return db('projects').insert(data)
                         .then(id => {
                            return getProjectById(id)
    })
}

const getTasks = (id) => {
    return db('tasks').select('id', 'name', 'description', 'completed')
                      .where({ project: id })
}

const addResource = (data, id) => {
    return db('projects').update(data)
                         .where({ id })
                         .then(id => {
                             return getProjectById(id)
                         })
}

module.exports = {
    getProjects,
    getProjectById,
    insertProject,
    getTasks,
    addResource
}