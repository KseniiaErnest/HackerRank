/* HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly 5 people on social media. On the first day, half of those 5  people like the advertisement and each shares it with 3 of their friends. */

function viralAdvertising(n) {
  let totalLikes = 0;
  let shared = 5;

  for (let i = 1; i <= n; i++) {
    // Calculate the number of likes for the current day
    let likes = Math.floor(shared / 2);
    // Add the likes for the current day to the total likes
    totalLikes += likes;
// Update the number of people who will share the ad on the next day
    shared = likes * 3;
  }

  return totalLikes;
}