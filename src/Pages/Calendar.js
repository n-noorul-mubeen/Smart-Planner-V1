import React, { useState, useRef, useEffect } from 'react';
import { DayPilotCalendar, DayPilotNavigator } from "@daypilot/daypilot-lite-react";
import tasksData from './output.json'; // Import the JSON file containing events data

const styles = {
  wrap: {
    display: "flex",
  },
  left: {
    marginRight: "10px",
  },
  main: {
    flexGrow: 1,
  },
};

const Calendar = () => {
  const [viewType, setViewType] = useState("Week");
  const [durationBarVisible, setDurationBarVisible] = useState(false);
  const calendarRef = useRef();

  useEffect(() => {
    // Load event data from JSON file
    calendarRef.current.control.update({
      startDate: "2024-04-16",
      events: tasksData.map(task => ({
        id: task.id,
        start: new Date(task.start),
        end: new Date(task.end),
        text: task.text,
        backColor: task.color,
      }))
    });
  }, []);

  const handleTimeRangeSelected = (args) => {
    if (!args.day) return; // Exit if no day is selected
    calendarRef.current.control.update({
      startDate: args.day,
    });
  };

  return (
    <div style={styles.wrap}>
      <div style={styles.left}>
        <DayPilotNavigator
          selectMode={"Week"}
          showMonths={3}
          skipMonths={3}
          onTimeRangeSelected={handleTimeRangeSelected}
        />
      </div>
      <div style={styles.main}>
        <DayPilotCalendar
          viewType={viewType}
          durationBarVisible={durationBarVisible}
          ref={calendarRef}
        />
      </div>
    </div>
  );
};

export default Calendar;
