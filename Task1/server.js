const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.json());

// GET request for /api/v3/app/events with event_id query parameter
app.get('/api/v3/app/events', (req, res) => {
  const eventId = req.query.id;
  
  // do something with the event ID, such as retrieving it from a database

  res.send(`Event with ID ${eventId} retrieved successfully`);
});

// GET request for /api/v3/app/events with type, limit, and page query parameters
app.get('/api/v3/app/events', (req, res) => {
  const eventType = req.query.type;
  const eventLimit = req.query.limit;
  const eventPage = req.query.page;

  // do something with the query parameters, such as retrieving a list of events from a database

  res.send(`Events with type=${eventType}, limit=${eventLimit}, and page=${eventPage} retrieved successfully`);
});

// POST request for /api/v3/app/events with name, image, tagline, schedule, description, moderator, category, sub_category, and rigor_rank fields
app.post('/api/v3/app/events', upload.single('image'), (req, res) => {
  const eventName = req.body.name;
  const eventImage = req.file;
  const eventTagline = req.body.tagline;
  const eventSchedule = req.body.schedule;
  const eventDescription = req.body.description;
  const eventModerator = req.body.moderator;
  const eventCategory = req.body.category;
  const eventSubCategory = req.body.sub_category;
  const eventRigorRank = req.body.rigor_rank;

  // do something with the payload data and uploaded image, such as storing it in a database

  res.send(`Event with name ${eventName} created successfully`);
});

// PUT request for /api/v3/app/events/:id with the same fields as the POST request
app.put('/api/v3/app/events/:id', upload.single('image'), (req, res) => {
  const eventId = req.params.id;
  const eventName = req.body.name;
  const eventImage = req.file;
  const eventTagline = req.body.tagline;
  const eventSchedule = req.body.schedule;
  const eventDescription = req.body.description;
  const eventModerator = req.body.moderator;
  const eventCategory = req.body.category;
  const eventSubCategory = req.body.sub_category;
  const eventRigorRank = req.body.rigor_rank;


  // do something with the payload data and uploaded image, such as updating it in a database

  res.send(`Event with ID ${eventId} updated successfully`);
});

// DELETE request for /api/v3/app/events/:id
app.delete('/api/v3/app/events/:id', (req, res) => {
  const eventId = req.params.id;

  // do something with the event ID, such as deleting it from a database

  res.send(`Event with ID ${eventId} deleted successfully`);
});

app.listen(8000, () => console.log('Server started on port 8000'));
