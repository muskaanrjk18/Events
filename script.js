function handleSubmit(event) {
    event.preventDefault();
    document.getElementById("msg").textContent = "🎉 Registration successful!";
    setTimeout(() => {
      document.getElementById("msg").textContent = "";
      event.target.reset();
    }, 3000);
    return false;
  }
  