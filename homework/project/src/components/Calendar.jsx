import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const Calendar = () => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const goToNextMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setSelectedDate(newDate);
  };

  const goToPreviousMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setSelectedDate(newDate);
  };

  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const daysArray = [];
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  const emptySlots = [];
  for (let i = 0; i < firstDay; i++) {
    emptySlots.push(null);
  }

  return (
    <Card
      style={{
        width: "400px",
        margin: "0 auto",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Card.Body style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {`${selectedDate.toLocaleString("default", { month: "long" })} ${currentYear}`}
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Button variant="outline-primary" onClick={goToPreviousMonth}>
            &lt;
          </Button>
          <Button variant="outline-primary" onClick={goToNextMonth}>
            &gt;
          </Button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "5px",
          }}
        >
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              style={{ textAlign: "center", fontWeight: "bold", color: "#555" }}
            >
              {day}
            </div>
          ))}

          {emptySlots.map((_, index) => (
            <div key={`empty-${index}`} />
          ))}

          {daysArray.map((day) => (
            <div
              key={day}
              style={{
                textAlign: "center",
                padding: "15px",
                borderRadius: "8px",
                backgroundColor: "#f4f4f4",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onClick={() =>
                alert(`You selected: ${day} ${currentMonth + 1}/${currentYear}`)
              }
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#ddd")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#f4f4f4")}
            >
              {day}
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Calendar;
