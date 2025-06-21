# Library Management System Server

### About 

This is a library management server where user can keep their books.User can also borrow books from the existing books.In real world many users are borrowing books and purchasing books from server management system like Library Management System Server.

### Features 

* User can save their books and borrow the existing books.
* User can't give wrong information because zod validation is added.
* User can filter their desired books by genre name.
* User can also see borrowed book summary .

### Book Api's

##### Find all books 
* [https://library-management-system-4ioj.vercel.app/api/books](https://library-management-system-4ioj.vercel.app/api/books)
  
##### Find books by filtering genre Example :
* [https://library-management-system-4ioj.vercel.app/api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5](https://library-management-system-4ioj.vercel.app/api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5) 

##### Find books by Id Example: 
* [https://library-management-system-4ioj.vercel.app/api/books/68569ca728996d8db38b8393](https://library-management-system-4ioj.vercel.app/api/books/68569ca728996d8db38b8393)


### Borrow Api's

#### Find borrowed books summary Example:
* [https://library-management-system-4ioj.vercel.app/api/borrow](https://library-management-system-4ioj.vercel.app/api/borrow)


### Setup locally:

#### Install
* Git
* MongoDB
* Node js
* Typescript
* Express
* Postman
* Mongoose
* Cors
  
Some software you may not need to install but it is always safe to install all required softwares.

#### Github repo link given below:
* [https://github.com/ShahariarSohan/library-management-system](https://github.com/ShahariarSohan/library-management-system)
* Clone repo from  going there .
  
#### Use command
* npm i  command install all the required file like zod,dotenv,cors etc but you can also install it manually.

#### Set Environment Variable file
* Set a .env file and if you have mongoDB client uri you can use it.

#### Set up file 
* Finally Set up some file according to your requirement.


