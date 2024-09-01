class Product {
    constructor(Name, Price, Category){
        this.Name = Name
        this.Price =Price
        this.Category = Category
    }

    getInfo(){
        console.log(`\n\t name: ${this.Name} \n\t price: ${this.Price} \n\t category: ${this.Category}`);
    }

    applyDiscount(discountRate){
        let discount = (this.Price * discountRate) / 100
        this.Price -= discount
        console.log(`\t new price after ${discountRate}% discount ${this.Price}`)
    }
}

let Product1 = new Product ("laptop", 5000, "Electronics");
let Product2 = new Product ("Tshirt", 50, "clothing");


Product1.getInfo();
Product1.applyDiscount(10)
Product2.getInfo()
Product2.applyDiscount(10)