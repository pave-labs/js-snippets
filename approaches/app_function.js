var app;

window.onload = function () {
    app = new App();
}


function App() {
    var privateVar;

    this.publicMethod = function () {
        _privateMethod();
    };

    function _privateMethod() {}
}