
CREATE TABLE IF NOT EXISTS color (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

ALTER TABLE color MODIFY name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


INSERT INTO color (id, name) VALUES
(1, 'black'),
(2, 'blue'),
(3, 'gray'),
(4, 'green'),
(5, 'lightblue'),
(6, 'orange'),
(7, 'pink'),
(8, 'purple'),
(9, 'red'),
(10, 'white'),
(12, 'yellow')
