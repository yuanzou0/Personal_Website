// About page
// Add dailyMessage
// Query the placeholder div
let dailyMessage = document.querySelector('#dailyMessage');

// Messages for each day of the week
const weeklyMessages = [
    "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",
    "Be yourself; everyone else is already taken. -Oscar Wilde",
    "The only thing we have to fear is fear itself. -Franklin D. Roosevelt",
    "You only live once, but if you do it right, once is enough. -Mae West",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison",
    "The secret of success is to do the common thing uncommonly well. -John D. Rockefeller Jr.",
    "I find that the harder I work, the more luck I seem to have. -Thomas Jefferson"
];

// Function to update the daily message
function updateDailyMessage() {
    let today = new Date().getDay(); // Get the current day of the week (0 = Sunday, 6 = Saturday)
    dailyMessage.textContent = weeklyMessages[today]; // Set the message based on the day
}

// Call the function to set the message
updateDailyMessage();