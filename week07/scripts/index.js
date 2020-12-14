let app = new Vue({
    el: "#app",
    data: {
        message:"Hello Vue!"
    }
});

let app2 = new Vue({
    el: "#app2",
    data:{
        message:"you loaded this page on " + new.Date().toLocaleString()
    }
});
    