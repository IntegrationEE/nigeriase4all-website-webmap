

export async function fetchData(request) {
    try{
        const res = await fetch(request);
        return res.json()
    }catch(err){
        return
    }
}