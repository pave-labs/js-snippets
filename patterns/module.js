var Module = (function () {
    var privateVar;

    var _privateMethod = function () {
        console.log("Hello 1");
    };

    var someMethod = function () {
        _privateMethod();
    };

    var anotherMethod = function (text) {
        console.log(text);
    };

    return {
        someMethod: someMethod,
        anotherMethod: anotherMethod
    };

})();

Module.someMethod();
Module.anotherMethod('Hello 2');