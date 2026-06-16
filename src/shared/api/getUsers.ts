import { USERS_URL } from "./config";

async function getData() {
    const res = await fetch(USERS_URL)
    const data = res.json()
    return data
}
export default getData