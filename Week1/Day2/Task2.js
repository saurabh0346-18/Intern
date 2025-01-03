class Person {
  constructor(name, id) {
      this.name = name;
      this.id = id;
  }
}

class Member extends Person {
  constructor(name, id, membershipType) {
      super(name, id);
      this.membershipType = membershipType;
  }
}

class Book {
  constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.isAvailable = true; 
  }
}

class Loan {
  #fine; 

  constructor(book, member, dueDate) {
      this.book = book;
      this.member = member;
      this.dueDate = dueDate;
      this.#fine = 0; 
  }

  // Method to set fine
  setFine(amount) {
      this.#fine = amount;
  }

  // Method to get fine
  getFine() {
      return this.#fine;
  }
}

class Library {
  constructor() {
      this.books = [];
      this.members = [];
      this.loans = [];
  }

  addBook(book) {
      this.books.push(book);
      console.log(`Book "${book.title}" added to the library.`);
  }

  registerMember(member) {
      this.members.push(member);
      console.log(`Member "${member.name}" registered.`);
  }

  issueBook(isbn, memberId) {
      const book = this.books.find(b => b.isbn === isbn && b.isAvailable);
      const member = this.members.find(m => m.id === memberId);

      if (!book) {
          console.log(`Book with ISBN ${isbn} is not available.`);
          return;
      }

      if (!member) {
          console.log(`Member with ID ${memberId} is not registered.`);
          return;
      }

      // Mark the book as not available
      book.isAvailable = false;

      // Set a due date (e.g., 14 days from now)
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 14);

      // Create a new loan
      const loan = new Loan(book, member, dueDate);
      this.loans.push(loan);
      console.log(`Book "${book.title}" issued to member "${member.name}". Due date: ${dueDate.toDateString()}`);
  }
}

// Example usage
const library = new Library();

// Adding books
const book1 = new Book("Hnads On ML", "Aurelien Geron", "123456789");
const book2 = new Book("The Hundred-Page ML", "Andriy Burkov", "987654321");
library.addBook(book1);
library.addBook(book2);

// Registering members
const member1 = new Member("Saurabh", "1", "Regular");
const member2 = new Member("Arpit", "2", "Premium");
library.registerMember(member1);
library.registerMember(member2);

// Issuing a book
library.issueBook("123456789", "1"); // Successful issue
library.issueBook("123456789", "2"); // Book not available





// Enhanced 

// class Person {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//   }
// }

// class Member extends Person {
//   constructor(name, id, membershipType) {
//     super(name, id);
//     this.membershipType = membershipType;
//   }
// }

// class Book {
//   constructor(title, author, isbn) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//     this.isAvailable = true;
//   }
// }

// class Loan {
//   #fine;

//   constructor(book, member, dueDate) {
//     this.book = book;
//     this.member = member;
//     this.dueDate = dueDate;
//     this.#fine = 0;
//   }

//   // Method to set fine
//   setFine(amount) {
//     this.#fine = amount;
//   }

//   // Method to get fine
//   getFine() {
//     return this.#fine;
//   }

//   // Method to calculate fine
//   calculateFine(currentDate) {
//     const overdueDays = Math.floor(
//       (currentDate - this.dueDate) / (1000 * 60 * 60 * 24)
//     );
//     if (overdueDays > 0) {
//       const finePerDay = 10; // Fine amount per day
//       this.setFine(overdueDays * finePerDay);
//     }
//     return this.getFine();
//   }
// }

// class Library {
//   constructor() {
//     this.books = [];
//     this.members = [];
//     this.loans = [];
//   }

//   addBook(book) {
//     this.books.push(book);
//     console.log(`Book "${book.title}" added to the library.`);
//   }

//   registerMember(member) {
//     this.members.push(member);
//     console.log(`Member "${member.name}" registered.`);
//   }

//   issueBook(isbn, memberId) {
//     const book = this.books.find(b => b.isbn === isbn && b.isAvailable);
//     const member = this.members.find(m => m.id === memberId);

//     if (!book) {
//       console.log(`Book with ISBN ${isbn} is not available.`);
//       return;
//     }

//     if (!member) {
//       console.log(`Member with ID ${memberId} is not registered.`);
//       return;
//     }

//     // Mark the book as not available
//     book.isAvailable = false;

//     // Set a due date (e.g., 14 days from now)
//     const dueDate = new Date();
//     dueDate.setDate(dueDate.getDate() + 14);

//     // Create a new loan
//     const loan = new Loan(book, member, dueDate);
//     this.loans.push(loan);
//     console.log(
//       `Book "${book.title}" issued to member "${member.name}". Due date: ${dueDate.toDateString()}`
//     );
//   }

//   returnBook(isbn, memberId) {
//     const loanIndex = this.loans.findIndex(
//       l => l.book.isbn === isbn && l.member.id === memberId
//     );

//     if (loanIndex === -1) {
//       console.log(`No loan found for book ISBN ${isbn} and member ID ${memberId}.`);
//       return;
//     }

//     const loan = this.loans[loanIndex];
//     const currentDate = new Date();

//     // Calculate fine if overdue
//     const fine = loan.calculateFine(currentDate);
//     if (fine > 0) {
//       console.log(
//         `Book "${loan.book.title}" is overdue. Fine: ₹${fine}`
//       );
//     } else {
//       console.log(`Book "${loan.book.title}" returned on time.`);
//     }

//     // Mark the book as available
//     loan.book.isAvailable = true;

//     // Remove the loan record
//     this.loans.splice(loanIndex, 1);
//   }
// }

// // Example usage
// const library = new Library();

// // Adding books
// const book1 = new Book("Hnads On ML", "Aurelien Geron", "123456789");
// const book2 = new Book("The Hundred-Page ML", "Andriy Burkov", "987654321");
// library.addBook(book1);
// library.addBook(book2);

// // Registering members
// const member1 = new Member("Saurabh", "1", "Regular");
// const member2 = new Member("Arpit", "2", "Premium");
// library.registerMember(member1);
// library.registerMember(member2);

// // Issuing a book
// library.issueBook("123456789", "1"); // Successful issue

// // Simulate returning a book after the due date
// setTimeout(() => {
//   library.returnBook("123456789", "1"); // Calculate fine
// }, 1000); // Simulate a delay

