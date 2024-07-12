package edu.ar.model;

public class Usuario {

    public String nombre;
    public String email;
    public int edad;

    public Usuario() {

    }

    public Usuario(String no, String em, int ed) {
        this.nombre = no;
        this.email = em;
        this.edad = ed;
    }

    public boolean ingresarPelicula() {
        return true;
    }

    @Override
    public String toString() {
        return "Usuario [nombre=" + nombre + ", email=" + email + ", edad=" + edad + "]";
    }

}
