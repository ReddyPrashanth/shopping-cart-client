import CategoryRepository from './CategoryRepository'
import ReviewRepository from './ReviewRepository'
import ProductRepository from './ProductRepository'
import CartRepository from './CartRepository'

const repositories = {
    'categories': CategoryRepository,
    'reviews': ReviewRepository,
    'products': ProductRepository,
    'cart': CartRepository
}

export default {
    get: name => repositories[name]
}