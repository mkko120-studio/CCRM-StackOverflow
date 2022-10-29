<script lang="ts">
    import {navigate} from "svelte-routing";
    import {onMount} from "svelte";

    onMount(()=> {
        history.replaceState({error: true}, "", "/404")
        document.title = "Oops! Page not found"
    })

</script>

<main>
    <div class="ewrapper">
            <div class="error_404">
                <h1>Oh no!</h1>

                Site you wanted to go is either broken or doesn't exist!
                <br>
                Please use button below go to go
                <div on:click={() => navigate("/")} class="link_404"><h3>Home</h3></div>
            </div>
    </div>

</main>

<style>

    .ewrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .error_404 {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        text-align: center;
    }

    .link_404 {
        cursor: pointer;
        text-decoration: underline;
    }


</style>