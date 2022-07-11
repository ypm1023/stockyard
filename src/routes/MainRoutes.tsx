import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const DashboardAnalytics = Loadable(lazy(() => import('views/dashboard/Analytics')));

// widget routing
const WidgetStatistics = Loadable(lazy(() => import('views/widget/Statistics')));
const WidgetData = Loadable(lazy(() => import('views/widget/Data')));
const WidgetChart = Loadable(lazy(() => import('views/widget/Chart')));

// application - user social & account profile routing
const AppUserSocialProfile = Loadable(lazy(() => import('views/application/users/social-profile')));
const AppUserAccountProfile = Loadable(lazy(() => import('views/application/users/account-profile')));

// application - user cards & list variant routing

const AppAddUserProfile = Loadable(lazy(() => import('views/application/users/add')));
const AppProfileListStyle = Loadable(lazy(() => import('views/application/users/list')));

// application - customer routing
const AppCustomerList = Loadable(lazy(() => import('views/application/customer/CustomerList')));
const AppCustomerOrderList = Loadable(lazy(() => import('views/application/customer/OrderList')));
const AppCustomerCreateInvoice = Loadable(lazy(() => import('views/application/customer/CreateInvoice')));
const AppCustomerOrderDetails = Loadable(lazy(() => import('views/application/customer/OrderDetails')));
const AppCustomerProduct = Loadable(lazy(() => import('views/application/customer/Product')));
const AppCustomerProductReview = Loadable(lazy(() => import('views/application/customer/ProductReview')));

// application e-commerce pages
const AppECommProducts = Loadable(lazy(() => import('views/application/e-commerce/Products')));
const AppECommProductDetails = Loadable(lazy(() => import('views/application/e-commerce/ProductDetails')));
const AppECommProductList = Loadable(lazy(() => import('views/application/e-commerce/ProductList')));
const AppECommCheckout = Loadable(lazy(() => import('views/application/e-commerce/Checkout')));

// add
const WaringPage = Loadable(lazy(() => import('views/report/waring')));
const LogPage = Loadable(lazy(() => import('views/report/log')));
const VenuePage = Loadable(lazy(() => import('views/report/venue')));

const TransportPage = Loadable(lazy(() => import('views/transport')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/waring/list',
            element: <WaringPage />
        },
        {
            path: '/log/list',
            element: <LogPage />
        },
        {
            path: '/venue/list',
            element: <VenuePage />
        },
        {
            path: '/transport/list',
            element: <TransportPage />
        },
        {
            path: '/widget/statistics',
            element: <WidgetStatistics />
        },
        {
            path: '/widget/data',
            element: <WidgetData />
        },
        {
            path: '/widget/chart',
            element: <WidgetChart />
        },

        {
            path: '/user/social-profile/:tab',
            element: <AppUserSocialProfile />
        },
        {
            path: '/user/account-profile/profile',
            element: <AppUserAccountProfile />
        },
        {
            path: '/user/list',
            element: <AppProfileListStyle />
        },
        {
            path: '/user/add',
            element: <AppAddUserProfile />
        },
        {
            path: '/customer/customer-list',
            element: <AppCustomerList />
        },
        {
            path: '/customer/order-list',
            element: <AppCustomerOrderList />
        },
        {
            path: '/customer/create-invoice',
            element: <AppCustomerCreateInvoice />
        },
        {
            path: '/customer/order-details',
            element: <AppCustomerOrderDetails />
        },
        {
            path: '/customer/product',
            element: <AppCustomerProduct />
        },
        {
            path: '/customer/product-review',
            element: <AppCustomerProductReview />
        },
        {
            path: '/e-commerce/products',
            element: <AppECommProducts />
        },
        {
            path: '/e-commerce/product-details/:id',
            element: <AppECommProductDetails />
        },
        {
            path: '/e-commerce/product-list',
            element: <AppECommProductList />
        },
        {
            path: '/e-commerce/checkout',
            element: <AppECommCheckout />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/analytics',
            element: <DashboardAnalytics />
        }
    ]
};

export default MainRoutes;
