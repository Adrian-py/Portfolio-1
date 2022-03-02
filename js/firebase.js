// Connecting to firebase
const firebaseConfig = {
  apiKey: "AIzaSyAQIPU-r8xurixfvwXfM2uIRzr5QEMwLSM",
  authDomain: "lnt-project-b3639.firebaseapp.com",
  projectId: "lnt-project-b3639",
  storageBucket: "lnt-project-b3639.appspot.com",
  messagingSenderId: "715262381031",
  appId: "1:715262381031:web:b21e64366d12ac5b178b42",
  measurementId: "G-TPYT2BYK4H",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let messages = db.collection("Messages");

// Getting firebase data
const form = document.getElementById("contact__form");

form.addEventListener("submit", submitingForm);

function submitingForm(e) {
  e.preventDefault();
  let flag = true;
  const name = getInsertedValue("name"),
    email = getInsertedValue("email"),
    phone = getInsertedValue("phone"),
    message = getInsertedValue("message");

  // Validasi
  if (!name.length) {
    let temp = document.getElementById("name");
    temp.style.border = "solid 1px red";
    temp.value = "";
    temp.setAttribute("placeholder", "Name is required!");
    flag = false;
  }

  if (!email.length || email.indexOf("@") == -1) {
    let temp = document.getElementById("email");
    temp.style.border = "solid 1px red";
    temp.value = "";
    temp.setAttribute("placeholder", "Email is required!");
    flag = false;
  }
  if (!phone.length || phone.substr(0, 2) != "08" || phone.length > 15) {
    let temp = document.getElementById("phone");
    temp.style.border = "solid 1px red";
    temp.value = "";
    temp.setAttribute(
      "placeholder",
      "Phone number is required, must start with '08' and must be less than 14 digits!"
    );
    flag = false;
  }

  if (message.split(" ").length < 5 || message.split(" ").length > 100) {
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

function getInsertedValue(n) {
  return document.getElementById(n).value;
}

function sendToFirebase(m) {
  console.log(m);
  messages.add(m).then(
    (response) => {
      console.log("Message successfuly sent! ", response);
    },
    (e) => {
      throw "Failed to add message!\n Error Message: " + e;
    }
  );
}
