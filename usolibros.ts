if (require.main === module) {  
    const gestor = new GestorLibros();  

    // Leer libros desde un archivo en la inicialización  
    gestor.leerLibrosDesdeArchivo('libros.txt');  

    // Entrada de información a través del teclado  
    gestor.entradaInformacion();  

    // Consultar libros  
    console.log("Consulta de libros:");  
    gestor.consultarLibros();  

    // Modificar un libro existente  
    const libroModificado = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "Novela");  
    gestor.modificarLibro(0, libroModificado);  

    // Eliminar un libro  
    gestor.eliminarLibro(1); // Cambia el índice según sea necesario  

    // Consultar libros después de las modificaciones  
    console.log("Consulta de libros después de modificar y eliminar:");  
    gestor.consultarLibros();  
}