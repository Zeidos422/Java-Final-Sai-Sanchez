CREATE TABLE movie (
  id int NOT NULL AUTO_INCREMENT,
  nombre varchar(255),
  descripcion varchar(1024),
  genero varchar(255),
  calificacion int,
  anio int,
  estrellas tinyint,
  director varchar(255),
  PRIMARY KEY (id));
  
  select * from movie;
  

  UPDATE movie
  SET nombre = "Intensamente 2",
    descripcion = "La segunda entrega de la exitosa pelicula de Pixar, explorando nuevas emociones en la vida de Riley.",
    genero = "Animacion, Aventura, Comedia",
    calificacion = 99,
    anio = 2024,
    estrellas = 4,
    director = "Kelsey Mann"
WHERE id = 3;


INSERT INTO movie (nombre, descripcion, genero, calificacion, anio, estrellas, director) 
values ( "Soul" ,"La historia sigue a Joe Gardner, un profesor de m sica apasionado por el jazz. Despues de un giro inesperado, su alma se desprende de su cuerpo y emprende una busqueda para reunirse con el.",
"Animacion, Comedia dramatica",72,2020,4,"Pete Docter y Kemp Powers");                                                                                          
INSERT INTO movie (nombre, descripcion, genero, calificacion, anio, estrellas, director) 
values ( "Wolfwalkers" ,"Pelicula bellamente animada, con un estilo que recuerda a acuarelas en movimiento. Aborda temas como la relacion entre el hombre y la naturaleza.",
"Animacion, Fantasia",88,2020,3,"Tomm Moore y Ross Stewart");   
INSERT INTO movie (nombre, descripcion, genero, calificacion, anio, estrellas, director)                                                                          
values ( "Otra ronda" ,
"La trama gira en torno a cuatro profesores y amigos que deciden probar la teoria de que un deficit de alcohol en el organismo humano debe ser compensado con un par de copas.",
"Comedia dramatica",35,2020,4,"Thomas Vinterberg");
INSERT INTO movie (nombre, descripcion, genero, calificacion, anio, estrellas, director) 
values ( "El juicio de los 7 de Chicago"  ,"Basada en hechos reales, narra el polemico juicio a siete activistas durante las protestas en la Convencion Nacional Democrata de 1968 en Chicago.",
"Drama",59,2020,4,"Aaron Sorkin");
  
  

