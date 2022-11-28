<script lang="ts">

    let previousUrl = "";

    const observer = new MutationObserver(() => {
        if (window.location.pathname !== previousUrl) {
            previousUrl = window.location.pathname;
            console.log("URL changed to: " + previousUrl);
            if (previousUrl !== "/") {
                document.getElementById("arrowmenu").style.display = "block";
            } else {
                document.getElementById("arrowmenu").style.display = "none";
            }
        }
    });
    const config = { subtree: true, childList: true };

    // start observing change
    observer.observe(document, config);


    const showMenu = () => {
        document.getElementById("menu").style.display = "block";

        setTimeout( () => {
            document.getElementById("menu").style.transform = "translateX(0)"
        }, 1);
        setTimeout( () => {
            document.getElementById("menu-fit").style.display = "block";
        }, 50);


    }

    const hideMenu = () => {
        document.getElementById("menu").style.transform = "translateX(80vw)"
        setTimeout(() => {
            document.getElementById("menu").style.display = "none"
        }, 100);
        document.getElementById("menu-fit").style.display = "none"

    }

</script>

<main>

<!--    Menu-->
    <div class="hamburger-menu">
         <div class="menu-button">
             <img src="./hamburger.svg" alt="=" on:click="{() => showMenu()}" class="hamburger" style="fill: var(--secondary);" />
         </div>

        <div id="menu-fit"></div>

        <div id="menu">
            <h1>Menu</h1>
            <div class="menu-button">
                <img src="./close.svg" on:click={() => hideMenu()} class="hamburger" />
            </div>
            <hr>
            <ul>
                <li>Strona główna</li>
                <li>Odczytaj kod</li>
                <li>Dodaj produkt</li>
                <li>Zarządzaj inwentarzem</li>
                <li>Katalog inwentarza</li>
                <li>Ustawienia</li>
                <li style="color: red;">Wyloguj się</li>
            </ul>
        </div>
    </div>

<!--    Arrow back-->

    <div class="arrow-menu" id="arrowmenu">
        <div class="arrow-button">
            <img src="./arrow.svg" alt="<" on:click={() => history.back()} class="arrow" style="fill: var(--secondary)" />
        </div>
    </div>

</main>

<style>

    .arrow-menu {
        position: absolute;
        top: 0;
        left: 0;
        width: 25vw;
        height: 25vw;
        padding: 20px
    }

    .arrow-button, .arrow-button img {
        cursor: pointer;
        height: 3rem;
        width: 3rem;
    }


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

    .menu-button, .menu-button img {
        cursor: pointer;
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
        position: fixed;
        overflow: clip;
        top: 0;
        left: 0;
        height: 1000%;
        width: 80vw;
        background: rgba(0,0,0,0.3);

    }

    .menu-button {
        position: fixed;
        background-color: var(--background);
        padding: 20px 20px 10px 5px;
        top: 0;
        right: 0;
        color: var(--annotation)
    }

    @media only screen and (max-width: 1400px) {
        #menu {
            width: 40vw;
            transform: translateX(40vw);
        }
    }

    @media only screen and (max-width: 800px) {
        #menu {
            width: 70vw;
            transform: translateX(70vw);
        }
    }
</style>