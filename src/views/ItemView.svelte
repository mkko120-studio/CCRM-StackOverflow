<script lang="ts">
    import SvelteTable from "svelte-table"
    import data from "../stores/data.json"

    const columns = [
        {
            key: "id",
            title: "ID",
            value: v => v.ID,
            filterValue: v => v.ID,
            headerClass: "text-left",
        },
        {
            key: "label",
            title: "Label",
            value: v => v.label,
            sortable: true,
            filterValue: v => v.label.charAt(0).toLowerCase(),
        },
        {
            key: "size",
            title: "Size",
            value: v => v.size,
            sortable: true,
            filterOptions: rows => {
                // generate groupings of 0-10, 10-20 etc...
                let nums = {};
                rows.forEach(row => {
                    let num = Math.floor(row.size / 10);
                    if (nums[num] === undefined)
                        nums[num] = { name: `${num * 10} to ${(num + 1) * 10}`, value: num };
                });
                // fix order
                nums = Object.entries(nums)
                    .sort()
                    .reduce((o, [k, v]) => ((o[k] = v), o), {});
                return Object.values(nums);
            },
            filterValue: v => Math.floor(v.size / 10),
        }
    ]

let sel = { size: undefined }

</script>

<main>
<br>
<br>
<br>
<br>
<SvelteTable columns="{columns}"
             rows="{data}"
             showExpandIcon="{true}"
             expandSingle="{false}"
             rowKey="ID"
             classNameSelect="select"
             bind:filterSelections="{sel}"
>
    <svelte:fragment slot="expanded" let:row>{row.category}</svelte:fragment>
</SvelteTable>

</main>

<style>


</style>