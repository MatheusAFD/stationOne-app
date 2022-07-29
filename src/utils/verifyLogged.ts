function verifyLogged() {
  localStorage.getItem("logged") === "1"
    ? window.location.replace("/food")
    : "";
}

function verifyNotLogged() {
  {
    localStorage.getItem("logged") === null
      ? window.location.replace("/login")
      : "";
  }
}

export { verifyLogged, verifyNotLogged };
