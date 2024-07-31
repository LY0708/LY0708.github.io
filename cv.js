import { educationData } from './data/education.js';
import { experienceData } from './data/experience.js';

function educationLoader() {
  let html = 
  `
    <h1 class="title">Education</h1>
  `;

  for(let educationIdx = 0; educationIdx < educationData.length; educationIdx++) {
    const data = educationData[educationIdx];
    const courses = data["courses"].split(".");

    html +=
    `
    <div class="subSection">
      <div class="nameAndTime">
        <h2>${data["school"]}</h2>
        <h3>${data["time"]}</h3>
      </div>
      <h3>${data["degree"]}</h3>
      <div id="courses">
    `

    for(let courseIdx = 0; courseIdx < courses.length-1; courseIdx++) {
      html += 
      `
      <p class="textblock" id="course">${courses[courseIdx]}</p>
      `
    }
    html +=
    `
      </div>
    </div>
    `
  }

  document.getElementById("education").innerHTML = html;
}

function experienceLoader() {
  let html = 
  `
    <h1 class="title">Experience</h1>
  `;

  for(let expIdx = 0; expIdx < experienceData.length; expIdx++) {
    const data = experienceData[expIdx];

    html +=
    `
    <div class="subSection">
      <div class="nameAndTime">
        <div class="nameAndLocation">
          <h2>${data["company"]}</h2>
          <p class="textblock">${data["location"]}</p>
        </div>
        <h3>${data["time"]}</h3>
      </div>
      <h3>${data["title"]}</h3>
      <p>${data["description"]}</p>
    </div>
    `
  }

  document.getElementById("experience").innerHTML = html;
}


educationLoader();
experienceLoader();