function getDayOfWeek(day) {
  const dayObj = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
  };
  return dayObj[day];
}

function main(day) {
  let dayNum = getDayOfWeek(day);
  if (dayNum) {
    console.log(dayNum);
  } else {
    console.log("error");
  }
}

main("Monday");
main("Invalid");
