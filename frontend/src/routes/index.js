import HomePage from "../pages/HomePage/HomePage"
import ProductPage from "../pages/ProductPage/ProductPage"
import OrderPage from "../pages/OrderPage/OrderPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx"
import SupportPage from "../pages/SupportPage/SupportPage.jsx"

export const routes=[
    {
        path:'/',
        page:HomePage,
        isShowHeader:true
    },
    {
        path:'/products',
        page:ProductPage,
        isShowHeader:true
    },
    {
        path:'/order',
        page:OrderPage,
        isShowHeader:true
    },
    {
        path:'/support',
        page:SupportPage,
        isShowHeader:true
    },
    {
        path:'/support/:id',
        page:SupportPage,
        isShowHeader:true
    },
    {
        path:'*',
        page:NotFoundPage
    }
]