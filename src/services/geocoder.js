import {GEOCODER} from "../utils/consts";
import { fetchData } from "./fetcher";

export async function geocoder(searchTerm) {
    const request = `${GEOCODER.BASE_URL}q=${searchTerm}${GEOCODER.FILTER_OPTIONS}`
    return await fetchData(request)
}