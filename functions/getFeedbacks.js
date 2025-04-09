const fs = require('fs')
const path = require('path')
exports.handler = async function () {
    const filePath = path.join(__dirname, '../storage/feedback.json')
    const feedbacks = JSON.parse(fs.readFileSync(filePath))

    return {
        statusCode: 200,
        body: JSON.stringify(feedbacks)
    }
}