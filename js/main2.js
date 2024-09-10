const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;

  console.log(email);

  await axios
    .post("https://seramic-v1.onrender.com/api/v1/auth/forgot-password", {
      email: email,
    })
    .then((res) => {
      if (res.status == 200) {
        console.log(res);
        // Go To Home Screen
        window.location.href = "/index.html";
      }
    })
    .catch((e) => {
      console.log(e);
    });
});
