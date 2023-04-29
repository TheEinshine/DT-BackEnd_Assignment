const events = [];

// Function to generate a new unique ID for each event
function generateID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Function to validate the event payload
function validateEvent(event) {
  if (!event.name || !event.schedule || !event.description || !event.moderator || !event.category) {
    return false;
  }

  return true;
}

// Function to add a new event
function addEvent(event) {
  const newEvent = {
    type: 'event',
    uid: 18,
    id: generateID(),
    name: event.name,
    tagline: event.tagline || '',
    schedule: event.schedule,
    description: event.description,
    moderator: event.moderator,
    category: event.category,
    sub_category: event.sub_category || '',
    rigor_rank: event.rigor_rank || 0,
    attendees: []
  };

  events.push(newEvent);

  return newEvent;
}

// Function to get an event by ID
function getEventById(id) {
  return events.find(event => event.id === id);
}

// Function to get all events
function getAllEvents() {
  return events;
}

// Function to update an event by ID
function updateEventById(id, event) {
  const index = events.findIndex(event => event.id === id);

  if (index === -1) {
    return null;
  }

  events[index].name = event.name || events[index].name;
  events[index].tagline = event.tagline || events[index].tagline;
  events[index].schedule = event.schedule || events[index].schedule;
  events[index].description = event.description || events[index].description;
  events[index].moderator = event.moderator || events[index].moderator;
  events[index].category = event.category || events[index].category;
  events[index].sub_category = event.sub_category || events[index].sub_category;
  events[index].rigor_rank = event.rigor_rank || events[index].rigor_rank;

  return events[index];
}

// Function to delete an event by ID
function deleteEventById(id) {
  const index = events.findIndex(event => event.id === id);

  if (index === -1) {
    return null;
  }

  const deletedEvent = events[index];
  events.splice(index, 1);

  return deletedEvent;
}

module.exports = {
  validateEvent,
  addEvent,
  getEventById,
  getAllEvents,
  updateEventById,
  deleteEventById
};
