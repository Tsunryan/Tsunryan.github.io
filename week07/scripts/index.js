let app = new Vue({
    el: "#app",
    data: {
        message:"Hello Vue!"
    }
});

let app2 = new Vue({
    el: "#app2",
    data:{
        message:"you loaded this page on " + new Date().toLocaleString(),
        linkURL:"https://bbc.in/2LAnJs8",
        linkText:"google is down"
    }
});
    
    let app3 = new Vue ({
        el:"#app3",
        data:{
            seen: true
        }
    });