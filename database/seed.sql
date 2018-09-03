CREATE DATABASE linebot;

CREATE TABLE words(
   id INT PRIMARY KEY     NOT NULL,
   word             TEXT    NOT NULL,
   comment          TEXT,
   reaction         TEXT
);

insert into words (id, word) values (1, 'テストデータ');
