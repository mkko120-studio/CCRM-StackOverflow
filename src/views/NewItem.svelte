<script lang="ts">
    import {onMount} from "svelte";
    import {BrowserCodeReader, BrowserMultiFormatReader} from "@zxing/browser";
    import util from '../util/util'
    import formutil from "../util/formutil";


    let videoInput = navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(async () => await BrowserCodeReader.listVideoInputDevices());
    const codeReader = new BrowserMultiFormatReader();
    let select: HTMLSelectElement;
    onMount(() => {
        select = <HTMLSelectElement>document.getElementById("camera");
    })

    const submitForm = (e) => {
        const formData = new FormData(e.target)

        const data = {};
        for (let field of formData) {

            // formData = { field, field, ...field };
            // field = { 0: key, 1: value };
            // data[key] = value;
            data[field[0]] = field[1];
        }
        formutil.insertNewItemIntoDatabase(data)
    }

    const selectVideoInput = async (devID) => {
        const elem: HTMLVideoElement = document.querySelector('#reader > video')
        elem.style.display = "block";

        await codeReader.decodeFromVideoDevice(devID, elem, (result, error, controls) => {
            if (error) {
                return
            }
            if (result) {
                //@ts-ignore
                document.getElementById("decoded").value = result.getText();
                elem.style.display = "none";
                controls.stop();
            }
        }).catch(e => util.clog("decodeFromVideoDevice error: ", e))
    }

    const getSelect = () => {
        if (select) {
            return select.options[select.selectedIndex].value;
        } else {
            return null;
        }
    }





</script>

<main>

    <div class="container">
        <h1>Dodawanie nowego przedmiotu</h1>
        <div class="description">
            Aby dodać przedmiot do inwentarza należy uzupełnić informacje na jego temat.
        </div>

        <br>

        <form class="item-form" on:submit|preventDefault={submitForm}>
            <label for="item-id">
                ID przedmiotu
                <input type="text" id="item-id" name="item-id">
            </label>
            <br>
            <label for="camera">
                Wybierz kamerę
                <select id="camera">
                    {#await videoInput then input}
                        {#each input as dev}
                            <option value={dev.deviceId}>{dev.label}</option>
                        {/each}
                    {/await}
                </select>

                <button id="camera-button" on:click|preventDefault={async () => await selectVideoInput(getSelect())}>Wybierz</button>
            </label>
            <br>
            <label for="item-category">
                Wybierz kategorię produktu:
                <select id="item-category" name="item-category">
                    <option value="1">Kategoria 1</option>
                    <option value="2">Kategoria 2</option>
                    <option value="3">Kategoria 3</option>
                </select>
            </label>

            <br>
            <label for="decoded" class="reader" id="reader">

                <video height="400" style="display: none"></video>
                <br>
                Przypisany Kod kreskowy/QR
                <input id="decoded" name="decoded" placeholder="" readonly>

            </label>

            <div id="debug"></div>

            <input type="submit" name="submit" id="submit" />
        </form>
    </div>

</main>

<style>

    .container {
        padding: 20px;
    }

    .description {
        color: var(--secondary)
    }

    form * {
        margin: 10px;
    }

    input, select, button {
        border: 1px solid var(--annotation);
        background-color: var(--background-light);
    }

</style>