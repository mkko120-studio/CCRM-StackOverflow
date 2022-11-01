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

    // alert(`${screen.width}x${screen.height}y`)

    let style = {
        textDecoration: "none"
    }


</script>

<main>

    <div class="container">

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