const chatForm = document.getElementById("chat-form");

const socket = io();

socket.on("message", message => {
  console.log(message);
});

// Message submit
chatForm.addEventListener("submit", e => {
  e.preventDefault();
});
