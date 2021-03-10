self.addEventListener("push", (e) => {
    const config = {
        body:e.data.text() || "Yeni Mesaj İçerii Burada olacak",
        data: {
            dateOfArrival: Date.now(),
            primaryKey: "3"
        }
    }
    e.waitUntil(self.registration.showNotification("Yeni Makale Eklendi", config))
})