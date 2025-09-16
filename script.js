// Exemplo: alerta ao enviar newsletter
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Obrigado por se inscrever na Kanzon!");
        
      });
    }
  });
