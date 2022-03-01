// Connecting to firebase
const firebaseConfig = {
  apiKey: "AIzaSyBTA2okL17ubLumUK_EnmD6_ntgCzdMp2I",
  authDomain: "personal-project-5726e.firebaseapp.com",
  projectId: "personal-project-5726e",
  storageBucket: "personal-project-5726e.appspot.com",
  messagingSenderId: "199426811023",
  appId: "1:199426811023:web:dba28ca84893865182fcfa",
  measurementId: "G-173B53V228",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let messages = db.collection("Messages");

// Getting firebase data
const form = document.getElementById("contact__form");

form.addEventListener("submit", submitingForm);

function getInsertedValue(n) {
  return document.getElementById(n).value;
}

function sendToFirebase(m) {
  console.log("test");
  messages.add(m).then((response) => {
    response.get().then((r) => {
      console.log(r);
    });
  });
}

function submitingForm(e) {
  e.preventDefault();
  let flag = true;
  const name = getInsertedValue("name"),
    email = getInsertedValue("email"),
    phone = getInsertedValue("phone"),
    message = getInsertedValue("message");

  if (!name.length) {
    console.log("n");

    let temp = document.getElementById("name");
    temp.style.border = "solid 1px red";
    temp.value = "";
    temp.setAttribute("placeholder", "Name is required!");
    flag = false;
  }

  if (!email.length || email.indexOf("@") == -1) {
    console.log("e");
    let temp = document.getElementById("email");
    temp.style.border = "solid 1px red";
    temp.value = "";
    temp.setAttribute("placeholder", "Email is required!");
    flag = false;
  }
  if (!phone.length || phone.substr(0, 2) != "08" || phone.length > 15) {
    let temp = document.getElementById("phone");
    console.log("p");
    temp.style.border = "solid 1px red";
    temp.value = "";
    temp.setAttribute(
      "placeholder",
      "Phone number is required, must start with '08' and must be less than 14 digits!"
    );
    flag = false;
  }

  if (message.split(" ").length < 5 || message.split(" ").length > 100) {
    console.log("m");
    let temp = document.getElementById("message");
    temp.style.border = "solid 1px red";
    temp.value = "";
    temp.setAttribute(
      "placeholder",
      "The message's length must be more 5 and less than or equal to 100"
    );
    flag = false;
  }

  if (flag) {
    const data = {
      email: email,
      message: message,
      name: name,
      phoneNumber: phone,
    };
    sendToFirebase(data);
  }
}
