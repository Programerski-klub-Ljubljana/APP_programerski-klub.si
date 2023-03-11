import {writable} from 'svelte/store';
import {persisted} from "svelte-local-storage-store";

export const tokenStore = persisted('tokenStore', "default_token")
