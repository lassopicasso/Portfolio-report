const crossCourseSign = document.querySelector(".cross-course-sign");
const semesterSign = document.querySelector(".semester-sign");
const examSign = document.querySelector(".exam-sign");

const crossCourseContent = document.querySelector(".cross-course-content");
const semesterContent = document.querySelector(".semester-content");
const examContent = document.querySelector(".exam-content");

crossCourseSign.addEventListener("click", changeSign);
semesterSign.addEventListener("click", changeSign);
examSign.addEventListener("click", changeSign);

function changeSign(event) {
  if (event.target.classList.contains("fas")) {
    event.target.classList.toggle("fa-plus");
    event.target.classList.toggle("fa-minus");
  }
  if (event.target.classList.contains("cross-course-sign")) {
    if (event.target.classList.contains("fa-plus")) {
      crossCourseContent.style.display = "none";
    } else {
      crossCourseContent.style.display = "block";
    }
  } else if (event.target.classList.contains("semester-sign")) {
    if (event.target.classList.contains("fa-plus")) {
      semesterContent.style.display = "none";
    } else {
      semesterContent.style.display = "block";
    }
  } else {
    if (event.target.classList.contains("fa-plus")) {
      examContent.style.display = "none";
    } else {
      examContent.style.display = "block";
    }
  }
}
