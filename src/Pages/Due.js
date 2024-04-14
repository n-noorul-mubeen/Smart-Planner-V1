import React, { useState } from 'react';
import { events } from "../Components/events.js";
import "../Components/EventsPage.css";

const categorizeEvents = (events) => {
    const now = new Date();
    const upcoming = [];
    const completed = [];
    const overdue = [];
   
    events.forEach((event) => {
       const dueDate = new Date(event.dueDate);
       const dueTime = new Date(`${event.dueDate}T${event.dueTime}`);
   
       if (event.completed) {
         completed.push(event);
       } else if ((dueDate < now && !(event.completed)) || (dueDate.getTime() === now.getTime() && dueTime < now)) {
         overdue.push(event);
       } else {
         upcoming.push(event);
       }
    });
   
    return { upcoming, completed, overdue };
   };
   
  const Due = () => {
   const { upcoming, completed, overdue } = categorizeEvents(events);
   const [selectedCategory, setSelectedCategory] = useState('all');
  
   const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
   };
  
   const categories = ['all', 'completed', 'overdue', 'upcoming'];
  
   return (
      <div className="events-page">
        <div className="filter-dropdown">
          <select value={selectedCategory} onChange={handleCategoryChange}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Events' : category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
        {selectedCategory === 'all' ? (
          <>
            <div className="column upcoming">
              <h2>Upcoming Events</h2>
              <ul>
                {upcoming.map((event, index) => (
                  <li key={index}>
                   <span>{event.name}</span>
                   <span className="due-date">{event.dueDate}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="column completed">
              <h2>Completed Events</h2>
              <ul>
                {completed.map((event, index) => (
                  <li key={index}>
                   <span>{event.name}</span>
                   <span className="due-date">{event.dueDate}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="column overdue">
              <h2>Overdue Events</h2>
              <ul>
                {overdue.map((event, index) => (
                  <li key={index}>
                   <span>{event.name}</span>
                   <span className="due-date">{event.dueDate}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="column">
            <h2>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Events</h2>
            <ul>
              {events.filter((event) => {
                if (selectedCategory === 'completed') return event.completed;
                if (selectedCategory === 'overdue') {
                  const dueDate = new Date(event.dueDate);
                  const dueTime = new Date(`${event.dueDate}T${event.dueTime}`);
                  return (dueDate < new Date() && !(event.completed)) || (dueDate.getTime() === new Date().getTime() && dueTime < new Date());
                }
                if (selectedCategory === 'upcoming') {
                  const dueDate = new Date(event.dueDate);
                  const dueTime = new Date(`${event.dueDate}T${event.dueTime}`);
                  return dueDate > new Date() || (dueDate.getTime() === new Date().getTime() && dueTime > new Date());
                }
                return false;
              }).map((event, index) => (
                <li key={index}>
                  Task Name: {event.name} <br></br>
                  Task Type: {event.taskType}<br></br>
                  Difficulty: {event.difficulty}<br></br>
                  Due Time: {event.dueTime}<br></br>
  
                  Due Date: {event.dueDate}<br></br>
                  Description: {event.taskDescription}<br></br>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
   );
  };
  
  export default Due;