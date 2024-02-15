import Center from '../views/center/Center.vue'
import Home from '../views/home/Home.vue'
import UserAdd from '../views/user_manage/UserAdd.vue'
import UserList from '../views/user_manage/UserList.vue'
import NewsAdd from '../views/news_manage/NewsAdd.vue'
import NewsList from '../views/news_manage/NewsList.vue'
import NewsEdit from '../views/news_manage/NewsEdit.vue'
import ProductEdit from '../views/product_manage/ProductEdit.vue'
import ProductAdd from '../views/product_manage/ProductAdd.vue'
import ProductList from '../views/product_manage/ProductList.vue'
import NotFound from "../views/notfound/NotFound.vue"
import ExcelTool from '../views/tools/ExcelTool.vue'
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
        component:UserAdd,
        requirAdmin:true
    },
    {
        path:'/user-manage/userlist',
        component:UserList,
        requirAdmin:true
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
        path:'/news-manage/editnews/:id',
        component:NewsEdit
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
        path:'/product-manage/editproduct/:id',
        component:ProductEdit
    },
    {
        path:'/tools/exceltool',
        component:ExcelTool
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