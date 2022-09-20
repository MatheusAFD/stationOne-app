function saveUserData(data: any) {
  localStorage.setItem("logged", "1");
  localStorage.setItem("name", data.userContent.name);
  localStorage.setItem("phone", data.userContent.phone);
  localStorage.setItem("email", data.userContent.email);
  localStorage.setItem("avatarURL", data.userContent.avatarURL);
}

export { saveUserData };
