function Author(name, birthYear, nationality) {

    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality
}




function Book(title, author, genre, price) {

    this.title = title;
    this.author = author
    this.genre = genre;
    this.price = price;
}


Book.prototype.getInformation = function () {

    console.log(`books title : ${this.title}`)
    console.log(`author's name : ${this.author.name}`)
    console.log(`genra: ${this.genre}`)
    console.log(`price: ${this.price}`)
}

let authorData1 = new Author("Robert T. Kiyosaki", 1947, "USA")
let bookData1 = new Book("Rich Dad Poor Dad", authorData1, "financial education", "₹ 259")

bookData1.getInformation()

let authorData2 = new Author("Michael J. Losier", 1874, "USA")
let bookData2 = new Book("Low Of Attraction", authorData2, "Self-help", "₹ 359")


bookData2.getInformation()