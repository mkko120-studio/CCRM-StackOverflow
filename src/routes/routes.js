import MainPage from "../views/MainPage.svelte";
import e404 from "../views/404.svelte";
import NewItem from "../views/NewItem.svelte";
import ItemView from "../views/ItemView.svelte";

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
        name: "Item View",
        path: "/manage",
        component: ItemView
    }
    ,{
        name: "404",
        path: '/404',
        component: e404
    }

]

export default routes;