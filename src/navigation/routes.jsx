import Order from '../pages/order/Index'
import OrderProduct from '../pages/order/OrderProduct'
import Product from './../pages/product/Index'

export const routes = [
    { path: '/', component: Order},
    { path: '/products', component: Product},    
    { path: '/orders/:id', component: OrderProduct},    
    { path: '/orders', component: Order}    
]