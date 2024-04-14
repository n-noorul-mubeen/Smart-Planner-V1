import React, { useState, useRef } from 'react';
import { DayPilotCalendar, DayPilotNavigator } from "@daypilot/daypilot-lite-react";

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
