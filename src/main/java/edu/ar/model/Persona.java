package edu.ar.model;

public class Persona {

    private int id;
    private String nombre;
    private String apellido;
    private String nacionalidad;

    public Persona() {
    }

    public Persona(int id, String nombre, String apellido, String nacionalidad) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

    @Override
    public String toString() {
        return "Persona [getId()=" + getId() + ", getNombre()=" + getNombre() + ", getApellido()=" + getApellido()
                + ", getNacionalidad()=" + getNacionalidad() + "]";
    }

}
