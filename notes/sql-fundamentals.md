# SQL Relational Database Fundamentals

```sql
-- Create students table
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    enrollment_date DATE DEFAULT (CURRENT_DATE)
);

-- Inserting records
INSERT INTO students (first_name, last_name, email) 
VALUES ('Tanya', 'Garg', 'tgarg1012@gmail.com');

-- Filtering & Joins
SELECT s.first_name, c.course_name, e.grade
FROM students s
JOIN enrollments e ON s.id = e.student_id
JOIN courses c ON e.course_id = c.id
WHERE e.grade = 'A';
```


<!-- Updated: 2026-08-11T12:16:33+05:30 [Commit #500] -->


<!-- Updated: 2026-08-11T21:21:12+05:30 [Commit #505] -->


<!-- Updated: 2026-08-12T14:09:08+05:30 [Commit #509] -->
