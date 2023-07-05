import Center from '../views/center/Center.vue'
import Home from '../views/home/Home.vue'
import UserAdd from '../views/user_manage/UserAdd.vue'
import UserList from '../views/user_manage/UserList.vue'
import NewsAdd from '../views/news_manage/NewsAdd.vue'
import NewsList from '../views/news_manage/NewsList.vue'
import ProductAdd from '../views/product_manage/ProductAdd.vue'
import ProductList from '../views/product_manage/ProductList.vue'
import NotFound from "../views/notfound/NotFound.vue"
const routes = [
    {
        path:'/index',
        component:Home
    },
    {
        path:'/center',
        component:Center
    },
    {
        path:'/user-manage/useradd',
        component:UserAdd
    },
    {
        path:'/user-manage/userlist',
        component:UserList
    },
    {
        path:'/news-manage/newsadd',
        component:NewsAdd
    },
    {
        path:'/news-manage/newslist',
        component:NewsList
    },
    {
        path:'/product-manage/productadd',
        component:ProductAdd
    },
    {
        path:'/product-manage/productlist',
        component:ProductList
    },
    {
        path:'/',
        redirect:"/index"
    },
    {
        path:'/:pathMath(.*)*',
        name:"Notfound",
        component:NotFound
    }
]

export default routes