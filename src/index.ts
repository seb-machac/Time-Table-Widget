function getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}

function findClosestTime(targetTime: string, timeList: string[]): string {
  // Convert a time string (e.g., "14:30") to minutes since midnight
  const timeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const targetMinutes = timeToMinutes(targetTime);

  // Find the closest time
  let closestTime = timeList[0];
  let smallestDifference = Math.abs(targetMinutes - timeToMinutes(closestTime));
  

  for (const time of timeList) {
    const difference = Math.abs(targetMinutes - timeToMinutes(time));
    if (difference < smallestDifference) {
      smallestDifference = difference;
      closestTime = time;
    }
  }

  return closestTime;
}

// Example usage
const times = ["08:50", "9:40", "11:00", "11:50", "13:20", "14:10"];
const target = getCurrentTime();
console.log(target);
console.log(findClosestTime(target, times)); // Output: "12:30"
