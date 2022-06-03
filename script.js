const reportCurrent = [...document.querySelectorAll(".report h1")];
const reportPrevious = [...document.querySelectorAll(".report p:nth-child(3")];
const interval = document.querySelectorAll("li");

interval[1].classList.add("current");
interval.forEach((e) => {
  e.addEventListener("click", () => {
    for (i = 0; i < interval.length; i++) {
      interval[i].classList.remove("current");
    }
    e.classList.add("current");
  });
});

fetch("./data.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    reportCurrent.forEach((e) => {
      // Daily
      interval[0].addEventListener("click", () => {
        // Current
        reportCurrent[reportCurrent.indexOf(e)].textContent =
          data[reportCurrent.indexOf(e)].timeframes.daily.current + "hrs";
        // Previous
        reportPrevious[reportCurrent.indexOf(e)].textContent =
          "Last week - " +
          data[reportCurrent.indexOf(e)].timeframes.daily.previous +
          "hrs";
      });

      // Weekly
      interval[1].addEventListener("click", () => {
        // Current
        reportCurrent[reportCurrent.indexOf(e)].textContent =
          data[reportCurrent.indexOf(e)].timeframes.weekly.current + "hrs";
        // Previous
        reportPrevious[reportCurrent.indexOf(e)].textContent =
          "Last week - " +
          data[reportCurrent.indexOf(e)].timeframes.weekly.previous +
          "hrs";
      });

      // Monthly
      interval[2].addEventListener("click", () => {
        // Current
        reportCurrent[reportCurrent.indexOf(e)].textContent =
          data[reportCurrent.indexOf(e)].timeframes.monthly.current + "hrs";
        // Previous
        reportPrevious[reportCurrent.indexOf(e)].textContent =
          "Last week - " +
          data[reportCurrent.indexOf(e)].timeframes.monthly.previous +
          "hrs";
      });
    });
  });
