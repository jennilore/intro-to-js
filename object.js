const personne = {
    name: "Inan",
    age: 20,
    occupation: "Developer",
    greet: function(){
        console.log("hello" + " " + this.name);
    }
}

console.log(personne.name);
console.log(personne["age"])
personne.greet()