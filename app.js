window.addEventListener("load", async () => {
    const subscribeButton = document.querySelector('#subscribeButton');
    //Register Service Worker

    const sW = await navigator.serviceWorker.register("./sw.js")
    console.log("Service Worker =>", sW);

    subscribeButton.addEventListener("click", async () => {

        const serviceWorker = await navigator.serviceWorker.ready;
        const clientID = await serviceWorker.pushManager.subscribe({
            userVisibleOnly:true,
            applicationServerKey: "BNVtYp9HaIhLZIBqy-23rwA7sNS2zMkPJlasjVYZ6R9HmNwy0g9Jk9-T-7_wpodBVwft2Y6kWZwS717vES1Kv50"
        });
        console.log(clientID);
        console.log(JSON.stringify(clientID));


    })
})
