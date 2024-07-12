package edu.ar.model;

public class Director extends Persona {

    private int peliculasDirigidas;

    public Director(int id, String nombre, String apellido, String nacionalidad, int peliculasDirigidas) {
        super(id, nombre, apellido, nacionalidad);
        this.peliculasDirigidas = peliculasDirigidas;
    }

    public int getPeliculasDirigidas() {
        return peliculasDirigidas;
    }

    public void setPeliculasDirigidas(int peliculasDirigidas) {
        this.peliculasDirigidas = peliculasDirigidas;
    }

    @Override
    public String toString() {
        return "Director [peliculasDirigidas=" + peliculasDirigidas + ", toString()=" + super.toString() + "]";
    }

}
