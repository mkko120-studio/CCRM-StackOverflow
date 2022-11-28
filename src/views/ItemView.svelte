<script lang="ts">
    import data from "../stores/data.json"

</script>

<main>
    <br>
    <br>
    <br>
    <br>


    <table>
        <thead>
            <tr>
                <th class="row header-id" style="width: 7%">ID</th>
                <th class="row header-name" style="width: 60%">Nazwa produktu</th>
                <th class="row header-cat">Kategoria</th>
                <th class="row header-size" style="width: 9%">Ilość</th>
            </tr>
            {#each data as row}
                <tr>
                    <td class="row row-id">{row.ID}</td>
                    <td class="row row-prodname">{row.label}</td>
                    <td class="row row-cat">{row.category}</td>
                    <td class="row row-size">{row.size}</td>
                    <td class="row row-expand">expand></td>

<!--                    hidden div for entry details-->
                </tr>
            {/each}
        </thead>
    </table>


</main>

<style>

    table {
        width: 90%;
        margin: 2vw;
    }

    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }

    tr:nth-child(even) {
        background-color: var(--background-light);
    }

    .row {
        padding: 0.25em 1em;
    }

</style>