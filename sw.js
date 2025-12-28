self.addEventListener("install", e=>{
e.waitUntil(
caches.open("night-delivery").then(c=>{
return c.addAll([
"./",
"./index.html",
"./logo.png"
]);
})
);
});
