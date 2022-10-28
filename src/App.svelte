<script lang="ts">
    import {Router, Route} from 'svelte-routing';
    import routes from "./routes/routes.js";
    import Navbar from "./components/Navbar.svelte";
    import e404 from "./views/404.svelte";

    export let url = "";
</script>

<main>
    <Navbar />
    <Router url="{url}">
        {#each routes as route, index}
            <Route index="{index}" path="{route.path}" component="{route.component}" />
        {/each}
    </Router>

</main>

<style>

</style>