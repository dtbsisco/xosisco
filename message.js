document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const lastMessageTime = localStorage.getItem('lastMessageTime');
    const currentTime = Date.now();

    if (lastMessageTime && currentTime - lastMessageTime < 5 * 60 * 1000) {
        alert('You can only send a message once every 5 minutes. Please try again later.');
        return;
    }

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const webhookUrl = 'https://discord.com/api/webhooks/1316467054441664648/cq45TF9p_6f1IIfNZ127okGDgrSzAx_HK0VwBioxeFJy-IhZN6d7py4A09qrg25IZeoz';

    const payload = {
        embeds: [
            {
                description: `Message from **${name}**`,
                fields: [
                    {
                        name: 'Message',
                        value: message,
                    },
                ],
                color: 3066993,
                timestamp: new Date(),
            },
        ],
    };

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            document.getElementById('contact-form').reset();

            localStorage.setItem('lastMessageTime', currentTime);

            setTimeout(() => {
                location.reload();
            }, 1500);
        }
    } catch (error) {

    }
});