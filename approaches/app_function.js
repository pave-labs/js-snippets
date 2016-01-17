var app;

window.onload = function () {
    app = new App();
}


function App() {
    var privateVar;

    this.publicMethod = function () {
        privateMethod();
    };

    function privateMethod() {}
}