const db = new Map();

export function getFormValues(name) {
	if (!db.get(name)) {
		db.set(name, [{
			id: crypto.randomUUID(),
			description: 'Learn SvelteKit',
			done: false
		}]);
	}

	return db.get(userid);
}

export async function createFormEntry(name, email, phone, techpassion, choice, about) {
	const todos = db.get(name);

	todos.push({
		name: name,
		details: [{  email: email, phone: phone, techpassion: techpassion, choice: choice, about: about }],
	});

    // send this data to a discord server
    const webhook = require("webhook-discord");
    const Hook = new webhook.Webhook("https://discord.com/api/webhooks/1181070289140994078/tfhDDCJx4xVaj3muqiD_sbQV9OHTrOYPBC3YRr2BwknxyjIDk4N0c0dZruQWn9WGlZc-");
    const msg = new webhook.MessageBuilder()
        .setName("New Application")
        .setColor("#0099ff")
        .addField("Name", name)
        .addField("Email", email)
        .addField("Phone", phone)
        .addField("Tech Passion", techpassion)
        .addField("Choice", choice)
        .addField("About", about)
        .setFooter("Landing Page Vox")
        .setTime();
    Hook.send(msg);
}
