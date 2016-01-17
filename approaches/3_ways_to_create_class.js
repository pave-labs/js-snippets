/* JavaScript is a class-less language. Everything is an object.  */

/* 1. Using a function */

/* 1.1. Methods defined internally */
function Apple (type) {
    this.type = type;
    this.color = "red";
    /* 1. method getInfo() is recreated every time you create a new object */
    this.getInfo = function() {
        return this.color + ' ' + this.type + ' apple';
    };
}

/* 1.2. Methods added to the prototype */
function Apple (type) {
    this.type = type;
    this.color = "red";
}
Apple.prototype.getInfo = function() {
    return this.color + ' ' + this.type + ' apple';
};

var apple = new Apple('macintosh');
apple.color = "reddish";



/* 2. Using object literals */
var apple = {
    type: "macintosh",
    color: "red",
    getInfo: function () {
        return this.color + ' ' + this.type + ' apple';
    }
}

/*In this case you don't need to (and cannot) create an instance of the class, ' +
'it already exists. So you simply start using this instance.*/
apple.color = "reddish";



/*3. Singleton using a function*/
var apple = new function() {
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
}

apple.color = "reddish";





