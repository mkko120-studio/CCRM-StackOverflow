<script lang="ts">
    import {Router, Route} from 'svelte-routing';
    import routes from "./routes/routes.js";
    import Navbar from "./components/Navbar.svelte";
    import e404 from "./views/404.svelte";
    import Menu from "./components/Menu.svelte";

    export let url = "";
</script>

<main>
    <Navbar />
    <Router url="{url}">
        <Menu />
        {#each routes as route, index}
            <Route index="{index}" path="{route.path}" component="{route.component}" title="{route.name}" />
        {/each}
        <Route component="{e404}" />
    </Router>

</main>

<style>

</style>