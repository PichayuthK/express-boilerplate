const app = require('./app');
const configs = require('./configs');

const { PORT } = configs;

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
