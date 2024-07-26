//Constructor without parameters
function Book() {
    //Properties initialization
    this.title = 'HTML';
    this.author = 'Tim Berners Lee';
    this.price = 500;
    this.year = 1995;
    //Methods
    this.getBook = function() {
        return this.title + ',' + this.author + ',' + this.price + ',' + this.year;
    }
}
//Constructor with parameters
function Books(title=' ',author=' ',price=0,year=2024) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.year = year;
    this.getBooks = function() {
        return this.title + ',' + this.author + ',' + this.price + ',' + this.year;
    }
}