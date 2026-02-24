const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

app.get('/todo/list', (req, res) => {
    console.log(`Received request for /todo/list at ${new Date().toISOString()}`);
    res.json({
        todos: [
            { id: 1, task: "Complete CI/CD Setup", description: "Configure Jenkins, Docker, and AWS for seamless deployment.", status: "Completed" },
            { id: 2, task: "Verify Frontend", description: "Ensure React components render correctly and handle API errors.", status: "In Progress" },
            { id: 3, task: "Test Backend Integration", description: "Validate that the Express mock server responds to all endpoints.", status: "Pending" },
            { id: 4, task: "Final Success Check", description: "Verify everything works in unison for the final demonstration.", status: "Pending" }
        ]
    });
});

app.listen(port, '127.0.0.1', () => {
    console.log(`Mock backend listening at http://127.0.0.1:${port}/todo/list`);
});
