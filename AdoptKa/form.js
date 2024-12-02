document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const type = document.getElementById("type").value;
  const breed = document.getElementById("breed").value;
  const description = document.getElementById("description").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const photoFile = document.getElementById("photo").files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const photo = reader.result;

    const petData = {
      name,
      type,
      breed,
      photo,
      description,
      email,
      phone,
    };

    let pets = JSON.parse(localStorage.getItem("pets")) || [];
    pets.push(petData);
    localStorage.setItem("pets", JSON.stringify(pets));

    alert("Pet details saved to localStorage!");
    document.querySelector("form").reset();
  };

  if (photoFile) {
    reader.readAsDataURL(photoFile);
  } else {
    alert("Please upload a photo!");
  }
});
