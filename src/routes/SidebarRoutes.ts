import dashboard from "../assets/dashboard.svg";
import config from "../assets/config.svg";
import telemarket from "../assets/telemarket.svg";
import consulta from "../assets/consulta1.svg";

export interface SidebarRoutes {
    path?: string;
    icon: string;
    name: string;
    dropdown?: boolean;
    active?: boolean;
    open?: boolean;
    submenu?: Submenu[];
}

interface Submenu {
    path: string;
    name: string;
}

export const sidebarRoutes: SidebarRoutes[] = [
    {
        path: '/app/',
        icon: dashboard,
        name: 'Dashboard',
        active: false,
    },
    {
        icon: telemarket,
        name: 'Nader & Asociados',
        dropdown: true,
        active: false,
        open: false,
        submenu: [
            {
                path: '/app/clientes',
                name: 'Clientes',
            },
            {
                path: '/expedientes-nader',
                name: 'Expedientes',
            },
            {
                path: '/reportes-nader',
                name: 'Reportes',
            }
        ]
    },
    {
        icon: consulta,
        name: 'Consultas',
        dropdown: true,
        active: false,
        open: false,
        submenu: [
            {
                path: '/personas',
                name: 'Personas',
            },
            {
                path: '/consultas',
                name: 'Consultas',
            }
        ]
    },
    {
        icon: config,
        name: 'Configuracion',
        dropdown: true,
        active: false,
        open: false,
        submenu: [
            {
                path: '/users',
                name: 'Usuarios'
            },
            {
                path: '/help',
                name: 'Ayuda'
            }
        ]
    }
]