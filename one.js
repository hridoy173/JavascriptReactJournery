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