import { useState } from "react";
import "./Calendar.css";
import {
  add,
  sub,
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
  isEqual,
  parseISO,
  isSameDay,
} from "date-fns";

const trips = [
  "2024-06-08",
  "2024-06-09",
  "2024-06-12",
  "2024-06-15",
  "2024-06-16",
  "2024-06-22",
  "2024-06-23",
  "2024-06-29",
  "2024-07-06",
  "2024-07-07",
  "2024-07-12",
  "2024-07-14",
];
const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [tripdate, setTripDate] = useState(trips);
  console.log(tripdate);

  const buttonSetToday = () => setCurrentDate(new Date());

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);

  // create an array of all dates from current month
  const numDays = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });
  // console.log(numDays);

  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

  // functions for navigation by year or month
  const prevYear = () => {
    setCurrentDate(sub(currentDate, { years: 1 }));
  };

  const nextYear = () => {
    setCurrentDate(add(currentDate, { years: 1 }));
  };

  const prevMonth = () => {
    setCurrentDate(sub(currentDate, { months: 1 }));
  };

  const nextMonth = () => {
    setCurrentDate(add(currentDate, { months: 1 }));
  };


  return (
    <>
      <div className="calendar">
        <button className="button-today" onClick={buttonSetToday}>
          Today
        </button>

        <div className="calendar-area">
          {/* navigation bar */}
          <div onClick={prevYear}>{"<<"}</div>
          <div onClick={prevMonth}>{"<"}</div>

          <div className="calendar-area-today">
            {format(currentDate, "LLLL yyyy")}
          </div>

          <div onClick={nextMonth}>{">"}</div>
          <div onClick={nextYear}>{">>"}</div>

          {/* print weekdays from array */}
          {weeks.map((week) => (
            <div className="calendar-days">{week}</div>
          ))}

          {/* print space of previous month as index */}
          {/* notused = undefined, see https://stackoverflow.com/questions/40528557/how-does-array-fromlength-5-v-i-i-work */}
          {Array.from({ length: prefixDays }).map((notused, index) => (
            <div key={index} className="calendar-dates"></div>
          ))}

          {/* print date of current/selected month from array numDays */}
          {numDays.map((day) => {
            return (
              <div
                key={day.toString()}
                // nested ternary operator like if-else-if-else statement
                // https://www.freecodecamp.org/news/the-ternary-operator-in-javascript/
                className={
                  isToday(day)
                    ? "calendar-dates today"
                    : // : isEqual(day, selectedDate)
                      // ? "calendar-dates selected"
                      "calendar-dates"
                }
                data-date={format(day, "dd-MM-y")}
              >
                {format(day, "d")}

                {/* check for this day if available ? */}
                {tripdate.some((available) =>
                  isSameDay(day, parseISO(available))
                ) && <div className="tripdate"></div>}
              </div>
            );
          })}

          {/* print space of following month as index */}
          {Array.from({ length: suffixDays }).map((notused, index) => (
            <div key={index} className="calendar-dates">
              {" "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Calendar;
