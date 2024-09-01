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

let Product1 = new Product ("pant", 55, "clothing");
let Product2 = new Product ("Tshirt", 50, "clothing");


Product1.getInfo();
Product1.applyDiscount(10)
Product2.getInfo()
Product2.applyDiscount(10)


class electronics extends Product{
    constructor(name, price, brand, guaranty){
        super(name, price, "electronics")
        this.brand = brand
        this.guaranty =guaranty
    }

    getElectronicsInfo(){
        console.log(
            `\t brand: ${this.brand}  \n\t guaranty: ${this.guaranty}`
        )
    }
}

let Product3 = new Product ("laptop", 5500, "samsung", "5 years");
let Product4 = new Product ("mobile", 1500, "samsung", "7 years");

Product3.getInfo()
Product3.applyDiscount(20)
Product4.getInfo()
Product4.applyDiscount(5)

