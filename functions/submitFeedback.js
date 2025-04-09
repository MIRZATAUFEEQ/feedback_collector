const fs = require('fs')
const path = require('path')
exports.handler = async function (event) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' }
    }

    const data = JSON.parse(event.body);
    const { fullName, email, message } = data;
    if (!fullName || !email || !message) {
        return { statusCode: 400, body: 'Missing fields' };
    }

    const filePath = path.join(__dirname, '../storage/feedback.json')
    const feedbacks = JSON.parse(fs.readFileSync(filePath));
    const newFeedback = {
        id: Date.now(),
        fullName,
        email,
        message,
        timestamp: new Date().toISOString()
    }
    feedbacks.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(feedbacks, null, 2));
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Feedback submitted' })
    }
}