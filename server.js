//Install express server
const express = require('express');
res.sendFile(path.join(__dirname, './public', 'Apr29Home.html'));

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/angularForm'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angularForm'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);