(function(){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i=0; i < names.length; i++){
        var name = names[i]
        var firstLetter = name.charAt(0).toLowerCase();
        // var firstLetter = names[i];

        if (firstLetter === 'j'){
            sayGoodBye(name);
        }
        else{
            sayHello(name);
        }
    }
})();