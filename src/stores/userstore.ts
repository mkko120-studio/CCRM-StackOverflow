import {writable} from "svelte/store";


interface userstore_data {
    username: String,
    sessionID: string | null,

}

const userdata: userstore_data = {
    username: "",
    sessionID: "",

}

const userstore = writable(userdata)

export default userstore;