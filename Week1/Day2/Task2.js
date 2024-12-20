// Base Person class
class Person {
    constructor(name, id) {
      this.name = name;
      this.id = id;
    }
  }
  
  // Member class extending Person
  class Member extends Person {
    #fines = 0; // Private field to track fines
  
    constructor(name, id, membershipType) {
      super(name, id);
      this.membershipType = membershipType;
    }
  
    // Add fine to the member
    addFine(amount) {
      this.#fines += amount;
      console.log(`${this.name} now has fines of $${this.#fines.toFixed(2)}`);
    }
  
    // Get the total fines (read-only access)
    getFines() {
      return this.#fines;
    }
  
    // Clear all fines
    clearFines() {
      this.#fines = 0;
      console.log(`${this.name}'s fines have been cleared.`);
    }
  }
  
  // Book class
  class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.isAvailable = true;
    }
  }
  
  // Loan class
  class Loan {
    constructor(book, member, dueDate) {
      this.book = book;
      this.member = member;
      this.dueDate = dueDate;
    }
  
    // Check if the loan is overdue
    isOverdue(currentDate) {
      return currentDate > this.dueDate;
    }
  }
  
  // Library class
  class Library {
    constructor() {
      this.books = [];
      this.members = [];
      this.loans = [];
    }
  
    // Add a book
    addBook(book) {
      this.books.push(book);
      console.log(`Added book: "${book.title}" by ${book.author}`);
    }
  
    // Register a member
    registerMember(member) {
      this.members.push(member);
      console.log(`Registered member: "${member.name}" with ID: ${member.id}`);
    }
  
    // Issue a book
    issueBook(isbn, memberId) {
      const book = this.books.find(b => b.isbn === isbn && b.isAvailable);
      const member = this.members.find(m => m.id === memberId);
  
      if (!book) {
        console.log(`Book with ISBN ${isbn} is not available.`);
        return;
      }
      if (!member) {
        console.log(`Member with ID ${memberId} not found.`);
        return;
      }
  
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 14); // 14-day loan period
  
      book.isAvailable = false;
      this.loans.push(new Loan(book, member, dueDate));
      console.log(`Issued "${book.title}" to "${member.name}". Due date: ${dueDate.toDateString()}`);
    }
  
    // Return a book
    returnBook(isbn, currentDate = new Date()) {
      const loanIndex = this.loans.findIndex(loan => loan.book.isbn === isbn);
  
      if (loanIndex === -1) {
        console.log(`No loan found for book with ISBN: ${isbn}`);
        return;
      }
  
      const loan = this.loans[loanIndex];
      const { book, member } = loan;
  
      if (loan.isOverdue(currentDate)) {
        const fineAmount = 5; // Flat fine for overdue books
        member.addFine(fineAmount);
        console.log(`"${book.title}" was returned late. Fine of $${fineAmount.toFixed(2)} added to ${member.name}.`);
      } else {
        console.log(`"${book.title}" was returned on time.`);
      }
  
      book.isAvailable = true;
      this.loans.splice(loanIndex, 1);
    }
  }
  
  // Example usage
  const library = new Library();
  
  library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", "12345"));
  library.addBook(new Book("1984", "George Orwell", "67890"));
  
  library.registerMember(new Member("Alice", 1, "Gold"));
  library.registerMember(new Member("Bob", 2, "Silver"));
  
  library.issueBook("12345", 1); // Alice borrows "The Great Gatsby"
  library.returnBook("12345", new Date("2024-12-25")); // Alice returns "The Great Gatsby" late
  library.issueBook("67890", 2); // Bob borrows "1984"