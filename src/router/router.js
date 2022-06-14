import { createRouter, createWebHistory } from 'vue-router'
import ProductTable from "@/components/ProductTable"
import EmployessTable from "@/components/EmployessTable"
import SuppliersTable from "@/components/SuppliersTable"
import StockTable from "@/components/StockTable"
import OrdersTable from "@/components/OrdersTable"


const routes = [
  {
    path: '/Employess',
    name: 'Employess',
    component: EmployessTable
  },
  {
    path: '/product',
    name: 'product',
    component: ProductTable
  },
  {
    path: '/Suppliers',
    name: 'Suppliers',
    component: SuppliersTable
  },
  {
    path: '/Stock',
    name: 'Stock',
    component: StockTable
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersTable
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router