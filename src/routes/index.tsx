// import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import AuthGuard from 'utils/route-guard/AuthGuard';
import MainLayout from 'layout/MainLayout';
// import Loadable from 'ui-component/Loadable';

// const PagesLanding = Loadable(lazy(() => import('views/pages/landing')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([
        MainRoutes,
        AuthenticationRoutes,
        LoginRoutes
        // MainRoutes
    ]);
}
