import MainPage from "../views/MainPage.svelte";
import e404 from "../views/404.svelte";

const routes = [
    {
        name: "Home Page",
        route: "/home",
        component: MainPage,
    },
    {
        name: "404",
        path: '/404',
        component: e404
    }
]

export default routes;