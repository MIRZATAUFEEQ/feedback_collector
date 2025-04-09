const fs = require("fs");
const path = require("path");

exports.handler = async function () {
  const filePath = path.join(__dirname, "storage", "feedback.json");

  try {
    // Check if the file exists first
    if (!fs.existsSync(filePath)) {
      // If not, create it with empty array
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, JSON.stringify([]));
    }

    const data = fs.readFileSync(filePath, "utf8");
    const feedbacks = JSON.parse(data);

    return {
      statusCode: 200,
      body: JSON.stringify(feedbacks),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error fetching feedbacks", error: err.message }),
    };
  }
};
