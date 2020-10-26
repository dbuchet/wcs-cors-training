export default async (url, options = {}, json) => {

    try {
        const res = await fetch(url, options);
        const parsed = await (() => {
            if (json) return res.json();
            return res.text();
        })();
        console.log(parsed);
    }
    catch (e) {
        // Request has failed
    }

}