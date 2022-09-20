function verifyLogged() {
  localStorage.getItem("logged") === "1" ? location.replace("/food") : "";
}

function verifyNotLogged() {
  {
    localStorage.getItem("logged") === null ? location.replace("/login") : "";
  }
}

export { verifyLogged, verifyNotLogged };
