import axios from 'axios';

export async function SendDiscordWebhook(message: string) {
    console.log("entered");
    const formated_msg = "404 page reached:\nhttps://nightly.dragonforgenexus.xyz/" + message;
    try {
        const webhookURL = 'https://discord.com/api/webhooks/1213649717263859782/uEdN1QOwmssCKoX9SndPBdGM90TqD9eCw3WEbogknuBpuS_4cOGSDwGwASalFKX3jkcl';
        const payload = {
            content: formated_msg
        };

        const response = await axios.post(webhookURL, payload);

        if (response.status !== 200 && response.status !== 204) {
            throw new Error(`Failed to send message: ${response.status} ${response.statusText}`);
        }

        console.log('Message sent to Discord webhook successfully!');
    } catch (error) {
        console.error('Error sending message to Discord webhook:', error);
    }
}