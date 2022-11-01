<script lang="ts">

    import {onMount} from "svelte";
    import {Link} from "svelte-routing";

    export let location;
    export let index;
    export let title;

    document.title = title;

    console.log(location)
    console.log(index)

    let time = new Date()
    $: date = `${time.getDate()}.${time.getMonth().toString().length < 2 ? "0"+time.getMonth() : time.getMonth()}.${time.getFullYear()},
     godzina ${time.getHours().toString().length < 2 ? "0"+time.getHours() : time.getHours()}:${time.getMinutes().toString().length < 2 ? "0"+time.getMinutes() : time.getMinutes()}:${time.getSeconds().toString().length < 2 ? "0"+time.getSeconds() : time.getSeconds()}`
    onMount(() => {
        setInterval(() => {
            time = new Date();
        }, 1000)
    })

    const showMenu = () => {
        document.getElementById("menu").style.display = "block";

        setTimeout( () => {
                    document.getElementById("menu").style.transform = "translateX(0)"
        }, 1);
        setTimeout( () => {
            document.getElementById("menu-fit").style.display = "block";
        }, 100);


    }

    const hideMenu = () => {
        document.getElementById("menu").style.transform = "translateX(80vw)"
        setTimeout(() => {
            document.getElementById("menu").style.display = "none"
        }, 250);
        document.getElementById("menu-fit").style.display = "none"

    }

    // alert(`${screen.width}x${screen.height}y`)

    let style = {
        textDecoration: "none"
    }


</script>

<main>

    <div class="container">

        <div class="menu-button">
            <img src="./hamburger.svg" on:click="{() => showMenu()}" class="hamburger" style="fill: var(--secondary);"/>
        </div>

        <div id="menu-fit"></div>

        <div id="menu">
            <h1>Menu</h1>
            <div class="menu-button">
                <img src="./close.svg" on:click={() => hideMenu()} class="hamburger" />
            </div>
            <hr>
            <ul>
                <li>Odczytaj kod</li>
                <li>Dodaj produkt</li>
                <li>Zarządzaj inwentarzem</li>
                <li>Katalog inwentarza</li>
                <li>Ustawienia</li>
                <li style="color: red;">Wyloguj się</li>
            </ul>
        </div>

        <div class="welcome-box">
            <h1>Witaj {`client`}</h1>
            <h3>Dzisiaj mamy {date}</h3>
        </div>

        <div class="content-flex">
            <div class="flexbox-item">
                <Link style={style} to="/new"><h4>Odczytaj kod</h4></Link>
            </div>
            <div class="flexbox-item">
                <Link style="text-decoration: none" to="/manage"><h4>Zarządzanie inwentarzem</h4></Link>
            </div>
            <div class="flexbox-item">
                <Link style="text-decoration: none" to="/list"><h4>Katalog inwentarza</h4></Link>
            </div>
            <div class="flexbox-item">
                <Link style="text-decoration: none" to="/settings"><h4>Ustawienia</h4></Link>
            </div>
        </div>
    </div>

</main>

<style>

    #menu {
        z-index: 2;
        display: none;
        height: 100%;
        position: fixed;
        overflow: clip;
        right: 0;
        top: 0;
        width: 25vw;
        background: var(--background);
        padding: 20px;
        transform: translateX(25vw);
        transition: transform 250ms ease-in-out;
    }

    .menu-button img {
        height: 3rem;
        width: 3rem;
    }

    #menu h1 {
        margin-left: 10px;
    }

    #menu ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    #menu li {
        margin: 10px 20px;
        padding: 10px;
        font-size: 20px;
    }

    #menu-fit {
        z-index: 1;
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 80vw;
        background: rgba(0,0,0,0.3);

    }

    .hamburger {
        position: absolute;
        margin-top: 20px;
        margin-right: 20px;
        top: 0;
        right: 0;
        color: var(--annotation)
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
       color: var(--secondary);
   }

   .flexbox-item > :global(a) {
       text-decoration: none;
       width: 100%;
       height: 100%;

       position: relative;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -22%);
   }

    @media only screen and (max-width: 1400px) {
        #menu {
            width: 40vw;
            transform: translateX(40vw);
        }

        .content-flex {
            flex-wrap: wrap;
        }
        .flexbox-item {
            flex: 40%;
            width: 50%;
            height: 15vh;
        }
    }

   @media only screen and (max-width: 800px) {
       #menu {
           width: 70vw;
           transform: translateX(70vw);
       }
       .content-flex {
           flex-wrap: wrap;
       }
       .flexbox-item {
           flex: 40%;
           width: 50%;
           height: 20vh;
       }
   }



</style>