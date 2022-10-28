<script lang="ts">

    import {onMount} from "svelte";
    import {Link} from "svelte-routing"

    export let location;
    export let index;

    console.log(location)
    console.log(index)

    let time = new Date()
    $: date = `${time.getDate()}.${time.getMonth().toString().length < 2 ? "0"+time.getMonth() : time.getMonth()}.${time.getFullYear()},
     godzina ${time.getHours()}:${time.getMinutes().toString().length < 2 ? "0"+time.getMinutes() : time.getMinutes()}:${time.getSeconds()}`
    onMount(() => {
        setInterval(() => {
            time = new Date();
        }, 1000)
    })

    const showMenu = () => {
        document.getElementById("menu").style.transform = "translateX(0)"
    }

    const hideMenu = () => {
        document.getElementById("menu").style.transform = "translateX(80vw)"
    }

    // alert(`${screen.width}x${screen.height}y`)


</script>

<main>

    <div class="container">

        <div class="menu-button">
            <button on:click="{() => showMenu()}" class="hamburger">Hej</button>
        </div>

        <div id="menu">
            <h1>Hello</h1>
            <button on:click={() => hideMenu()} class="hamburger">Hej</button>
        </div>

        <div class="welcome-box">
            <h1>Witaj {`client`}</h1>
            <h3>Dzisiaj mamy {date}</h3>
        </div>

        <div class="content-flex">
            <div class="flexbox-item">
                <Link style="text-decoration: none" to="/new"><h4>Odczytaj kod</h4></Link>
            </div>
            <div class="flexbox-item">
                <Link style="text-decoration: none" to="/manage"><h4>Zarządzanie produktami</h4></Link>
            </div>
            <div class="flexbox-item">
                <Link style="text-decoration: none" to="/list"><h4>Katalog produktów</h4></Link>
            </div>
            <div class="flexbox-item">
                <Link style="text-decoration: none" to="/settings"><h4>Ustawienia</h4></Link>
            </div>
        </div>
    </div>

</main>

<style>

    #menu {
        height: 100%;
        position: fixed;
        right: 0;
        top: 0;
        width: 70vw;
        background: var(--background);
        padding: 20px;
        transform: translateX(80vw);
        transition: transform 250ms ease-in-out;
    }

    .hamburger {
        position: absolute;
        margin-top: 20px;
        margin-right: 20px;
        top: 0;
        right: 0;
    }

   .welcome-box h3 {
       color: var(--accent);
       margin-top: 0.5em !important;
   }
   .welcome-box h1 {
       margin-top: 1.5em;
       margin-bottom: 0.5em !important;
   }

   .content-flex {
       display: flex;
       flex-direction: row;
       flex-wrap: nowrap;
       align-content: center;
       justify-content: space-around;
   }

   .flexbox-item {

       background: var(--background-light);
       margin: 2.5px;
       width: 100%;
       height: 30vh;
       padding: 8vh 0;
       transition-property: background-color, color, border;
       transition-duration: 0.7s;
       transition-timing-function: ease-in-out;

       display: flex;
       justify-content: center;
       align-items: center;
       text-align: center;
   }

   .flexbox-item * {
       color: var(--secondary)
   }

   @media only screen and (max-width: 800px) {
       .content-flex {
           flex-wrap: wrap;
       }
       .flexbox-item {
           flex: 40%;
           width: 50%;
           height: 20vh;
       }
   }

   @media only screen and (max-width: 1400px) {
       .content-flex {
           flex-wrap: wrap;
       }
       .flexbox-item {
           flex: 40%;
           width: 50%;
           height: 15vh;
       }
   }

</style>