import HomePage from "../pages/HomePage/HomePage"
import ProductPage from "../pages/ProductPage/ProductPage"
import OrderPage from "../pages/OrderPage/OrderPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx"
import SupportPage from "../pages/SupportPage/SupportPage.jsx"
import LoginPage from "../pages/LoginPage/LoginPage.jsx"
import SignUpPage from "../pages/SignUpPage/SignUpPage.jsx"
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage.jsx"
import PaymentPage from "../pages/PayMentPage/PayMentPage.jsx"

export const routes=[
    {
        path:'/login',
        page:LoginPage,
        // isShowHeader:true
    },
    {
        path:'/signup',
        page:SignUpPage,
        // isShowHeader:true
    },
    {
        path:'/',
        page:HomePage,
        isShowHeader:true
    },
    {
        path:'/home',
        page:HomePage,
        isShowHeader:true
    },
    {
        path:'/product',
        page:ProductPage,
        isShowHeader:true
    },
    {
        path:'/product-detail',
        page:ProductDetailPage,
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
        path:'/payment',
        page: PaymentPage,
        isShowHeader:true,

    },
    {
        path:'*',
        page:NotFoundPage
    },
    
]