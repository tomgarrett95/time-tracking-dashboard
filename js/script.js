let data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];

let dailyToggle = document.querySelector('.daily-toggle').addEventListener("click", daily);
let weeklyToggle = document.querySelector('.weekly-toggle').addEventListener("click", weekly);
let monthlyToggle = document.querySelector('.monthly-toggle').addEventListener("click", monthly);
let workDuration = document.querySelector(".work-duration");
let workPrevious = document.querySelector(".work-previous");
let playDuration = document.querySelector(".play-duration");
let playPrevious = document.querySelector(".play-previous");
let studyDuration = document.querySelector(".study-duration");
let studyPrevious = document.querySelector(".study-previous");
let exerciseDuration = document.querySelector(".exercise-duration");
let exercisePrevious = document.querySelector(".exercise-previous");
let socialDuration = document.querySelector(".social-duration");
let socialPrevious = document.querySelector(".social-previous");
let selfCareDuration = document.querySelector(".self-care-duration");
let selfCarePrevious = document.querySelector(".self-care-previous");

window.onload = (ev) => {
  daily();
};

function daily() {
  document.querySelector(".daily-toggle").classList.add("active");
  document.querySelector(".weekly-toggle").classList.remove("active");
  document.querySelector(".monthly-toggle").classList.remove("active");
  // Work
  workDuration.textContent = data[0].timeframes.daily.current + "hrs";
  workPrevious.textContent = "Previous day - " + data[0].timeframes.daily.previous + "hrs";
  // Play
  playDuration.textContent = data[1].timeframes.daily.current + "hrs";
  playPrevious.textContent = "Previous day - " + data[1].timeframes.daily.previous + "hrs";
  // Study
  studyDuration.textContent = data[2].timeframes.daily.current + "hrs";
  studyPrevious.textContent = "Previous day - " + data[2].timeframes.daily.previous + "hrs";
  // Exercise
  exerciseDuration.textContent = data[3].timeframes.daily.current + "hrs";
  exercisePrevious.textContent = "Previous day - " + data[3].timeframes.daily.previous + "hrs";
  // Social
  socialDuration.textContent = data[4].timeframes.daily.current + "hrs";
  socialPrevious.textContent = "Previous day - " + data[4].timeframes.daily.previous + "hrs";
  // Self-care
  selfCareDuration.textContent = data[5].timeframes.daily.current + "hrs";
  selfCarePrevious.textContent = "Previous day - " + data[5].timeframes.daily.previous + "hrs";
}

function weekly() {
  document.querySelector(".daily-toggle").classList.remove("active");
  document.querySelector(".weekly-toggle").classList.add("active");
  document.querySelector(".monthly-toggle").classList.remove("active");
  // Work
  workDuration.textContent = data[0].timeframes.weekly.current + "hrs";
  workPrevious.textContent = "Previous week - " + data[0].timeframes.weekly.previous + "hrs";
  // Play
  playDuration.textContent = data[1].timeframes.weekly.current + "hrs";
  playPrevious.textContent = "Previous week - " + data[1].timeframes.weekly.previous + "hrs";
  // Study
  studyDuration.textContent = data[2].timeframes.weekly.current + "hrs";
  studyPrevious.textContent = "Previous week - " + data[2].timeframes.weekly.previous + "hrs";
  // Exercise
  exerciseDuration.textContent = data[3].timeframes.weekly.current + "hrs";
  exercisePrevious.textContent = "Previous week - " + data[3].timeframes.weekly.previous + "hrs";
  // Social
  socialDuration.textContent = data[4].timeframes.weekly.current + "hrs";
  socialPrevious.textContent = "Previous week - " + data[4].timeframes.weekly.previous + "hrs";
  // Self-care
  selfCareDuration.textContent = data[5].timeframes.weekly.current + "hrs";
  selfCarePrevious.textContent = "Previous week - " + data[5].timeframes.weekly.previous + "hrs";
}

function monthly() {
  document.querySelector(".daily-toggle").classList.remove("active");
  document.querySelector(".weekly-toggle").classList.remove("active");
  document.querySelector(".monthly-toggle").classList.add("active");
  // Work
  workDuration.textContent = data[0].timeframes.monthly.current + "hrs";
  workPrevious.textContent = "Previous month - " + data[0].timeframes.monthly.previous + "hrs";
  // Play
  playDuration.textContent = data[1].timeframes.monthly.current + "hrs";
  playPrevious.textContent = "Previous month - " + data[1].timeframes.monthly.previous + "hrs";
  // Study
  studyDuration.textContent = data[2].timeframes.monthly.current + "hrs";
  studyPrevious.textContent = "Previous month - " + data[2].timeframes.monthly.previous + "hrs";
  // Exercise
  exerciseDuration.textContent = data[3].timeframes.monthly.current + "hrs";
  exercisePrevious.textContent = "Previous month - " + data[3].timeframes.monthly.previous + "hrs";
  // Social
  socialDuration.textContent = data[4].timeframes.monthly.current + "hrs";
  socialPrevious.textContent = "Previous month - " + data[4].timeframes.monthly.previous + "hrs";
  // Self-care
  selfCareDuration.textContent = data[5].timeframes.monthly.current + "hrs";
  selfCarePrevious.textContent = "Previous month - " + data[5].timeframes.monthly.previous + "hrs";
}