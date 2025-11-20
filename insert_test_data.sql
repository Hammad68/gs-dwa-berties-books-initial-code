# Insert data into the tables

USE berties_books;

INSERT INTO books (name, price) VALUES('Brighton Rock', 20.25), ('Brave New World', 25.00), ('Animal Farm', 12.99);
INSERT INTO users (firstname, lastname, email, username, password) VALUES('Educational', 'Institute', 'student@gold.ac.uk', 'gold', '$2b$10$FO15XZSkGOJxx/XdFW7t6.JDIP7y4Fg4c9NMPPyHRnb4D8a49b6KK');