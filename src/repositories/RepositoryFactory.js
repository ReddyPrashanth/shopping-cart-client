import CategoryRepository from './CategoryRepository'

const repositories = {
    'categories': CategoryRepository
}

export default {
    get: name => repositories[name]
}