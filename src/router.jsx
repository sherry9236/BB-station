import { createHashRouter } from 'react-router';
import FrontendLayout from './layout/FrontendLayout';
import Checkout from './views/front/checkout';
import Homepage from './views/front/Homepage';
import NotFound from './views/front/NotFound';
import ParentCommunity from './views/front/ParentCommunity';
import ProductDetailPage from './views/front/ProductDetailPage';
import ProductList from './views/front/ProductList';
import SellerStoreFront from './views/front/SellerStoreFront';
import ShoppingCart from './views/front/ShoppingCart';
import ShoppingReviews from './views/front/ShoppingReviews';
import Login from './views/Login';

export const router = createHashRouter([
  {
    paht: '/',
    element: <FrontendLayout />,
    children: [
      {
        //首頁
        index: true,
        element: <Homepage />,
      },
      {
        //找寶物-商品列表頁
        path: 'product/',
        element: <ProductList />,
      },
      {
        // 我要分享(沒有畫面-先導到首頁)
        path: 'product/:id',
        element: <Homepage />,
      },
      {
        // 愛心轉送(沒有畫面-先導到首頁)
        path: 'product/',
        element: <Homepage />,
      },
      {
        // 5.爸媽交流站
        path: 'admin/articles',
        element: <ParentCommunity />,
      },
      {
        // 5-2 文章詳情頁(購物心得)
        path: 'admin/article/:id',
        element: <ShoppingReviews />,
      },
      {
        // 育兒資源(沒有畫面-先導到首頁)
        path: 'product/:id',
        element: <Homepage />,
      },
      {
        // 購物車頁面
        path: 'cart',
        element: <ShoppingCart />,
      },
      {
        // 商品結帳頁
        path: 'checkout',
        element: <Checkout />,
      },
      {
        //登入頁
        path: 'login',
        element: <Login />,
      },
      {
        //商品詳情頁
        path: 'product/:id',
        element: <ProductDetailPage />,
      },
      {
        //2-0 找寶物/賣家商品賣場頁
        path: 'admin/products',
        element: <SellerStoreFront />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
