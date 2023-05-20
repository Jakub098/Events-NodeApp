const express = require('express');
const placesApiRouter = require('./routes/placesRouter');
const eventTypesApiRouter = require('./routes/eventTypesRouter');
const performersApiRouter = require('./routes/performersRouter');
const eventsApiRouter = require('./routes/eventsApiRouter');

const app = express();

app.use(express.json());

app.use('/api/places', placesApiRouter);
app.use('/api/event-types', eventTypesApiRouter);
app.use('/api/performers', performersApiRouter);
app.use('/api/events', eventsApiRouter);

app.listen(process.env.PORT || '3032', () => {
    console.log(`Server is running on port: ${process.env.PORT || 3032}`);
})