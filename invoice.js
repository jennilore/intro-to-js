function product (id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.getTotalprice = function(){
        return this.price * this.quantity
    }
}


let product1 = new product(1, 'apples', 5, 10);
let product2 = new product(2, 'oranges', 5, 7);
let product3 = new product(3, 'pineaple', 3, 15);
let product4 = new product(4, 'kiwi', 10, 15);
let product5 = new product(5, 'almond', 2, 30);
let invoceTotalprice = product1.getTotalprice() + product2.getTotalprice() + product3.getTotalprice() + product4.getTotalprice() + product5.getTotalprice() 


console.log("*************************Ecobazar Invoice***************************")
console.log("+------------------------------------------------------------------+")
console.log("| ID \t Name \t Unit price \t Quantity \t Total price \t |");
console.log("+------------------------------------------------------------------+")
console.log("|" + product1.id + "\t" + product1.name + "\t" + " $\t" + product1.price + "\t" + "\t" + product1.quantity + "\t" + " $\t" + product1.getTotalprice() + "\t" + "|");
console.log("+------------------------------------------------------------------+")
console.log("|" + product2.id + "\t" + product2.name + "\t" + " $\t" + product2.price + "\t" + "\t" + product2.quantity + "\t" + " $\t" + product2.getTotalprice() + "\t" + "|");
console.log("+------------------------------------------------------------------+")
console.log("|" + product3.id + "\t" + product3.name + " $\t" + product3.price + "\t" + "\t" + product3.quantity + "\t" + " $\t" + product3.getTotalprice() + "\t" + "|");
console.log("+------------------------------------------------------------------+")
console.log("|" + product4.id + "\t" + product4.name + "\t" + " $\t" + product4.price + "\t" + "\t" + product4.quantity + "\t" + " $\t" + product4.getTotalprice() + "\t" + "|");
console.log("+------------------------------------------------------------------+")
console.log("|" + product5.id + "\t" + product5.name + "\t" + " $\t" + product5.price + "\t" + "\t" + product5.quantity + "\t" + " $\t" + product4.getTotalprice() + "\t" + "|");
console.log("+------------------------------------------------------------------+")
console.log("| \t \t \t \t \t \t" + "total" + "\t"+ invoceTotalprice + "$ \t|" )
console.log("+------------------------------------------------------------------+")
console.log("********************************************************************")
