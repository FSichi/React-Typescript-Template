import { ProtectedRoute } from "./ProtectedRoute";
import { Dashboard } from "../pages/App/Dashboard";

import { AppRoutesInterface } from "../interfaces/Routes";
import { ClientesList } from "../pages/App/ClientesList";


export const AppRoutesList: AppRoutesInterface[] = [
    {
        path: '/dashboard',
        component: <ProtectedRoute children={<Dashboard />}></ProtectedRoute>,
    },
    {
        path: '/clientes',
        component: <ProtectedRoute children={<ClientesList />}></ProtectedRoute>,
    },
]