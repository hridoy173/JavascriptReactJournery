 var javascript = 
{
    name : "javascript",
    type : "programming language",
    libraries : ["react", "angular", "vue", "jquery"],
    myFunction : function (){
        this.libraries.forEach( (library) =>   console.log( `${this.name} has a library called ${library}` ) );
    }
    
};

// console.log(javascript.name);
javascript.myFunction();

var i = 0;
for (; i <= 5; i++) {
    // setTimeout(() => {
        console.log(i); // Output: 0, 1, 2, 3, 4, 5
    //  }
    // , 1000);
}

console.log("Hello World",i); // Output: Hello World 5