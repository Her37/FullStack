-- 1) ¿Cuáles son los nombres y la ocupación de cada uno de los empleados? 

SELECT `nombre`, `trabajo` FROM `empleados`;

-- 2) ¿Cuál es el nombre y la edad de cada uno de los empleados?

SELECT `nombre`, `edad` FROM `empleados`;

-- 3) ¿Cuál es el nombre y la edad de todos los programadores?

SELECT `nombre`, `edad` FROM `empleados`
WHERE `trabajo` =  'programador';

-- 4) ¿Cuáles son los empleados de mas de 30 años?

SELECT `nombre`, `edad` FROM `empleados`
WHERE `edad` > 30;

-- 5) ¿Cuál es el apellido y el mail de los empleados llamados Juan?

SELECT `apellido`, `email` FROM `empleados`
WHERE `nombre` = 'Juan';

-- 6) ¿Cuál es el nombre de las personas que trabajan como Programadores o Desarrolladores Web?

SELECT `nombre` FROM `empleados`
WHERE `trabajo` = 'Desarrollador Web'
OR  `trabajo` =  'Programador';

-- 7) Mostrar una lista (id_emp, nombre, apellido, trabajo) de las personas cuyo numero de empleado esté entre 15 y 20.

SELECT `id_emp`, `nombre`, `apellido`, `trabajo` FROM `empleados`
WHERE `id_emp` <= 20 
AND `id_emp` >= 15;

-- 8) ¿Cuáles son los Programadores que ganan menos de $80000?

SELECT `id_emp`, `nombre`, `apellido` FROM `empleados`
WHERE  `trabajo` = 'programador' 
AND `salario` < 80000;

-- 9) ¿Cuáles son los Programadores que ganan entre $75000 y $90000?

SELECT `nombre`, `apellido` FROM `empleados`
WHERE `salario` BETWEEN 75000 AND 90000
AND `trabajo` = 'programador';

-- 10) ¿Cuáles son los trabajadores cuyo apellido comienza con S?

SELECT  `nombre`, `apellido` FROM `empleados` 
WHERE `apellido` LIKE 's%';

-- 11) ¿Cuáles son los trabajadores cuyo nombre termina en l?

SELECT  `nombre`, `apellido` FROM `empleados` 
WHERE `nombre` LIKE '%l';

-- 12) Agregar un empleado con ID_empleado 22 con los siguientes datos: Francisco Perez,  Programador, 26 años, salario 90000, mail: francisco@bignet.com.

INSERT INTO `empleados`(`id_emp`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `email`) VALUES (NULL,'Francisco','Perez','Programador', 26, 90000,'francisco@bignet.com')

-- 13) Borrar los datos de Hernan Rosso.

DELETE FROM `empleados` 
WHERE `apellido` = 'Rosso'

-- 14) Modificar el salario de Daniel Gutierrez a 90000.

UPDATE `empleados` SET `salario`= 90000
WHERE `id_emp`= 14