import MainPage from "../views/MainPage.svelte";
import e404 from "../views/404.svelte";
import NewItem from "../views/NewItem.svelte";

const routes = [
    {
        name: "Home Page",
        path: "/",
        component: MainPage,
    },
    {
        name: "Add item",
        path: "/new",
        component: NewItem
    },
    {
        name: "404",
        path: '/404',
        component: e404
    }
]

export default routes;