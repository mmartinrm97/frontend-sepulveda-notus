import { createRouter, createWebHistory } from "vue-router";

//layouts
import Admin from '../layouts/Admin.vue'
import Auth from '../layouts/Auth.vue'

//views for admin layout
import Dashboard from "../views/admin/Dashboard.vue";
import Settings from "../views/admin/Settings.vue";
import Tables from "../views/admin/Tables.vue";
import Maps from "../views/admin/Maps.vue";
import Users from '../views/admin/Users.vue'
import CatalogoBien from '../views/admin/CatalogoBien.vue'

//views for auth layouts
import Login from "../views/auth/Login.vue";

const routes = [
    { path: "/", name: 'Inicio', redirect: '/auth/login' },

    {
        path: "/admin",
        redirect: "/admin/dashboard",
        component: Admin,
        children: [
            {
                path: "/admin/dashboard",
                component: Dashboard,
                name: 'Dashboard'
            },
            {
                path: "/admin/usuarios",
                component: Users,
                name: 'Usuarios'
            },
            {
                path: "/admin/catalogos-bienes",
                component: CatalogoBien,
                name: 'Catalogos deBienes'
            },
            {
                path: "/admin/settings",
                component: Settings,
                name: 'Settings'
            },
            {
                path: "/admin/tables",
                component: Tables,
                name: 'Tables'
            },
            {
                path: "/admin/maps",
                component: Maps,
                name: 'Maps'
            },
        ],
    },{
        path: "/auth",
        redirect:"/auth/login",
        component: Auth,
        children: [
            {
                path: "/auth/login",
                component: Login
            }
        ],
    }

];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
