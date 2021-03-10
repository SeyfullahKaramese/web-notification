self.addEventListener("push", (e) => {
    const config = {
        body: e.data.text() || "Yeni Mesaj İçerii Burada olacak",
        data: {
            dateOfArrival: Date.now(),
            primaryKey: "3"
        },
        icon: "images/logo.png",
        vibrate: [100, 50, 100],
        actions: [{
            action: "explore",title: "Gözat"
        },
        {
            action: "close", title: "Bildirimleri Kapat"
        }]
    }
    e.waitUntil(self.registration.showNotification("Yeni Makale Eklendi", config))
})