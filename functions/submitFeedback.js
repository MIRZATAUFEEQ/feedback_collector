const fs = require("fs");
const path = require("path");

exports.handler = async function (event) {
  const filePath = path.join(__dirname, "storage", "feedback.json");

  try {
    const { fullName, email, message } = JSON.parse(event.body);

    // Basic validation
    if (!fullName || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "All fields are required." }),
      };
    }

    const newFeedback = {
      id: Date.now(),
      fullName,
      email,
      message,
      timestamp: new Date().toISOString(),
    };

    let feedbacks = [];

    // Check if file exists
    if (fs.existsSync(filePath)) {
      const existingData = fs.readFileSync(filePath, "utf8");
      feedbacks = JSON.parse(existingData);
    } else {
      // If file doesn't exist, make sure directory exists
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    feedbacks.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(feedbacks, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Feedback submitted successfully!" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server error", error: err.message }),
    };
  }
};
