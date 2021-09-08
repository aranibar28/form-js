function createCard(values) {
  const card = document.createElement("article");
  card.classList.add("card");
  card.innerHTML = `
  <div>
    <ul>
        <li>Nombre completo: ${values.name} ${values.lastname}</li>
        <li>Email: ${values.email}</li>
        <li>Sexo: ${values.sex}</li>
        <li>Edad: ${values.age}</li>
        <li>Hobbies: ${values.hobbie}</li>
        <li>Pais: ${values.country}</li>
        <li><img src=${values.url} ></li>
        <li>Descripción: ${values.description}</li>
    </ul>
    <button>X</button>
  </div>
  `;

  card.querySelector("button").onclick = function () {
    confirm("Estas seguro que quieres elminar esta tarjeta?") && card.remove();
  };

  return card;
}

function evaluateSex(values) {
  let sex = "f";

  for (let i = 0; i < values.length; i++) {
    if (values[i].checked) {
      sex = values[i].value;
      break;
    }
  }
  return sex;
}

function evaluateHobbie(values) {
  let hobbies = [];

  for (let i = 0; i < values.length; i++) {
    values[i].checked && hobbies.push(values[i].value);
  }

  return hobbies;
}

function submitForm() {
  const form = document.querySelector("form");
  const name = document.querySelector(".js_name");
  const lastname = document.querySelector(".js_lastname");
  const email = document.querySelector(".js_email");
  const sex = document.querySelectorAll(".js_sex");
  const age = document.querySelector(".js_age");
  const hobbie = document.querySelectorAll(".js_hobbie");
  const country = document.querySelector(".js_country");
  const url = document.querySelector(".js_url");
  const description = document.querySelector(".js_description");
  const appContainer = document.getElementById("app-container");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    appContainer.appendChild(
      createCard({
        name: name.value,
        lastname: lastname.value,
        email: email.value,
        sex: evaluateSex(sex), // falor f o m
        age: age.value,
        hobbie: evaluateHobbie(hobbie), // checks
        country: country.value,
        url: url.value,
        description: description.value,
      })
    );
    this.reset();
  });
}

submitForm();
