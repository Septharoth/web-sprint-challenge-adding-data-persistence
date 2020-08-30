const db = require('../../data/dbConfig')

const getTasks = () => {
    return db('tasks').select('tasks.id', 'tasks.description', 'tasks.notes', 'tasks.completed', 'projects.name as pn', 'projects.description as pd')
                      .join('projects, tasks.project', 'projects.id')
}

const insertTask = (data) => {
    return db('tasks').insert(task)
                      .then(id => {
                          return db('tasks').where({ id: id }).first()
                      })
}

module.exports = {
    getTasks,
    insertTask
}