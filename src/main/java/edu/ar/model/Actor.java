package edu.ar.model;

public class Actor extends Persona {

    private int premiosGanados = 0;

    public Actor(int id, String nombre, String apellido, String nacionalidad, int premiosGanados) {
        super(id, nombre, apellido, nacionalidad);
        this.premiosGanados = premiosGanados;
    }

    public int getPremiosGanados() {
        return premiosGanados;
    }

    public void setPremiosGanados(int premiosGanados) {
        this.premiosGanados = premiosGanados;
    }

    @Override
    public String toString() {
        return "Actor [toString()=" + super.toString() + "]" + " Premios Ganados : " + getPremiosGanados();
    }

}
