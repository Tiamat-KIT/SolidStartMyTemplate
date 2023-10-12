import { createResource } from "solid-js";

export function FetchData(){
    const [Answers] = createResource(async() => {
        const response = await fetch("")
        return await response.json() as any
    })
    return {Answers}
}