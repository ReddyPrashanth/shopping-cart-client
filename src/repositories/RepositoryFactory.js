import CategoryRepository from './CategoryRepository'
import ReviewRepository from './ReviewRepository'
import ProductRepository from './ProductRepository'

const repositories = {
    'categories': CategoryRepository,
    'reviews': ReviewRepository,
    'products': ProductRepository
}

export default {
    get: name => repositories[name]
}