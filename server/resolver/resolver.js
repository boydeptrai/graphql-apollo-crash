const { books, authors } = require("../data/static");
const Author  = require('../models/Author');
const Book = require('../models/Book');

const resolvers ={
    
    Book: {
        author: (parent,args) => authors.find(author =>author.id == parent.authorId)
    },
    Author: {
        book: (parent,args) => books.filter(book =>book.authorId == parent.id)
    },
    

    //Mutation
    Mutation: {
        createAuthor: async (parent, args) =>{
            const newAuthor = new Author(args)
            return await newAuthor.save()
        },
        createBook: async (parent, args) =>{
            const newBook = new Book(args)
            return await newBook.save()
        }
    }

}

module.exports = resolvers