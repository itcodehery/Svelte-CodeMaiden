export async function getRandomNumber () {
    const res = await fetch('/random-number')

    if(res.ok){
        await res.text();
    }
    else{
        throw new Error('Something went wrong');
    }
}