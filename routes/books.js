// Create a new router
const express = require("express")
const router = express.Router()

router.get('/search',function(req, res, next){
    res.render("search.ejs")
});

router.get('/search-result', function (req, res, next) {
    //searching in the database
    // query database to get all the books based on the search keyword
    let sqlquery = "SELECT * FROM books WHERE name LIKE ?"; 
    let bookname = req.query['search-box'];
    // include everything before and after the search keyword
    let searchPattren = ['%' + bookname + '%']
    // execute sql query
    db.query(sqlquery, searchPattren, (err, result) => {
        if (err) {
            next(err);
        }
        res.render('searchResults.ejs', {availableBooks: result});
    });
});

router.get('/list', function(req, res, next) {
    // query database to get all the books
    let sqlquery = "SELECT * FROM books"; 
    // execute sql query
    db.query(sqlquery, (err, result) => {
        if (err) {
            next(err)
        }
        res.render('list.ejs', {availableBooks: result})
    });
});

router.get('/add-book', function (req, res, next) {
    //searching in the database
    res.render('addbook.ejs');
});

router.post('/bookadded', function (req, res, next) {
    // saving data in database
    let sqlquery = "INSERT INTO books (name, price) VALUES (?,?)"
    // execute sql query
    let newrecord = [req.body.bookname, req.body.price]
    db.query(sqlquery, newrecord, (err, result) => {
        if (err) {
            next(err)
        }
        else
            res.send(' This book is added to database, name: '+ req.body.bookname + ' price '+ req.body.price);
    })
}) 

router.get('/bargainbooks', function(req, res, next) {
    // query database to get all the books if their price is less than £20
    let sqlquery = "SELECT * FROM books WHERE price < 20";
    // execute sql query
    db.query(sqlquery, (err, result) => {
        if (err) {
            next(err)
        }
        res.render('bargainbooks.ejs', {availableBooks: result})
    });
});


// Export the router object so index.js can access it
module.exports = router
