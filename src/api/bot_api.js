// API service to connect to external bot service
const API_URL = "https://bots-api-g0anedbfgratfwc5.canadacentral-01.azurewebsites.net/api/chat/message" // import.meta.env.VITE_API_URL;

export async function sendMessageToBot(message) {
  try {
    let url = `${API_URL}/api/chat/message`; // Ensure the URL is correctly formed
    console.log(`Sending message to bot: ${message} to ${url}`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Bot response:', data);
    // Assuming the bot response is in data.message
    return data.reply;
  } catch (error) {
    console.error('Error sending message to bot:', JSON.stringify(error));
    return 'Sorry, there was a problem connecting to the bot.';
  }
}