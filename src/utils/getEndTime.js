export function getEndTime(hour, minute, second) {
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const currentDay = new Date().getDate()
  const currentHour = new Date().getHours() + Number(hour)
  const currentMinute = new Date().getMinutes() + Number(minute)
  const currentSecond = new Date().getSeconds() + Number(second)
  var end = new Date(
    currentYear,
    currentMonth,
    currentDay,
    currentHour,
    currentMinute,
    currentSecond
  ).getTime()

  return end
}
