// created an array of objects for the student info
const webDevStudents = [
  {
    image: "",
    name: "samuel ojo",
    gender: "male",
    track: "Web development",
    hobbies: "I love animes and reading novels",
  },

  {
    image: "",
    name: "gold gabbi",
    gender: "male",
    track: "dev ops",
    hobbies: "loves football",
  },

  {
    image: "",
    name: "becky bassey",
    gender: "female",
    track: "I.O.T specialist",
    hobbies: "she just love learning new languages",
  },

  {
    image: "",
    name: "favour okon",
    gender: "male",
    track: "python developer",
    hobbies: "loves the backend",
  },

  {
    image: "",
    name: "emediong freefire",
    gender: "male",
    track: "gamer expert",
    hobbies: "loves video games",
  },

  {
    image: "",
    name: "favour",
    gender: "male",
    track: "ui/ux expert",
    hobbies: "koren series lover",
  },

  {
    image: "",
    name: "Daniel Etuks",
    gender: "male",
    track: "SWITCHING OFF THE LIGHT",
    hobbies: "A.I and I.O.T EXPERT",
  },
];

//get elements on the page
// let classBox = document.getElementById('class-box')
let classBox = document.querySelector("#class-box");
console.log(classBox);

// loop over the items in the array

let html = "";

// forEach method
// webDevStudents.forEach((student) => {
//     // destructuring

//     const {image, name, gender, track, hobbies} = student
// //  console.log(student)
// html += `
// <div class="student-card">
//     <div class="image-box">
//         <img src="images/man1.jpg" alt="">
//     </div>
//     <div class="student-info">
//         <h4 class="student-name">${name}</h4>
//         <h5 class="student-gender">Gender: ${gender}</h5>
//         <h5 class="student-track">Track: ${track}</h5>
//         <p>${hobbies}</p>
//     </div>
// </div>
// `
// })

for (let i = 0; i < webDevStudents.length; i++) {
    html += `
    <div class="student-card">
    <div class="image-box">
        <img src="images/man1.jpg" alt="">
    </div>
    <div class="student-info">
        <h4 class="student-name">${webDevStudents[i].name}</h4>
        <h5 class="student-gender">Gender: </h5>
        <h5 class="student-track">Track: </h5>
        <p></p>
    </div>
</div>
    `
}

classBox.innerHTML = html;
