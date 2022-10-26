<script lang="ts">
    import {Router, Route} from 'svelte-routing';
    import routes from "./routes/routes.js";
    import Navbar from "./components/Navbar.svelte";

    export let url = "";
</script>

<main>

    <Router url="{url}">
        <Navbar />
        {#each routes as route, index}
            <Route index="{index}" path="{route.path}" component="{route.component}" />
        {/each}
    </Router>

    <div class="container">
        <h2>Hello {`client`}</h2>
    </div>

</main>

<style>

</style>