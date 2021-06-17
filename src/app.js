/* eslint-disable */
import "bootstrap";
import "./style.css";
import validator from "validator";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

let enviar = document.getElementById("enviar");

enviar.addEventListener("click", function(e) {
  e.preventDefault();
  console.log("evento ok");

  let formulario = document.getElementById("formulario");
  let alert = document.getElementById("alert");
  let card = document.getElementById("Card");
  let cvc = document.getElementById("CVC");
  let monto = document.getElementById("Amount");
  let name = document.getElementById("name");
  let apellido = document.getElementById("apellido");
  let pais = document.getElementById("pais");
  let departamento = document.getElementById("departamento");
  let codePost = document.getElementById("code-post");
  let msj = document.getElementById("msj");

  if (validator.isEmpty(card.value)) {
    alert.classList.add("d-block");
    card.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    card.classList.remove("alert-danger");
  }

  if (validator.isEmpty(cvc.value)) {
    alert.classList.add("d-block");
    cvc.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    cvc.classList.remove("alert-danger");
  }

  if (validator.isEmpty(monto.value)) {
    alert.classList.add("d-block");
    monto.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    monto.classList.remove("alert-danger");
  }

  if (validator.isEmpty(name.value)) {
    alert.classList.add("d-block");
    name.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    name.classList.remove("alert-danger");
  }

  if (validator.isEmpty(apellido.value)) {
    alert.classList.add("d-block");
    apellido.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    apellido.classList.remove("alert-danger");
  }

  if (validator.isEmpty(pais.value)) {
    alert.classList.add("d-block");
    pais.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    pais.classList.remove("alert-danger");
  }

  if (validator.isEmpty(departamento.value)) {
    alert.classList.add("d-block");
    departamento.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    departamento.classList.remove("alert-danger");
  }

  if (validator.isEmpty(codePost.value)) {
    alert.classList.add("d-block");
    codePost.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    codePost.classList.remove("alert-danger");
  }

  if (validator.isEmpty(msj.value)) {
    alert.classList.add("d-block");
    msj.classList.add("alert-danger");
  } else {
    alert.classList.remove("d-block");
    msj.classList.remove("alert-danger");
  }
});
