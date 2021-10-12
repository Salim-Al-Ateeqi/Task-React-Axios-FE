import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import ChatRoomsList from "./components/ChatRoomsList";
import { Route, Switch } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import CreateRoomModal from "./components/CreateRoomModal";

// Endpoints:
// Fetch all rooms:
// Endpoint: https://coded-task-axios-be.herokuapp.com/rooms
// GET

// Create a room:
// Endpoint: https://coded-task-axios-be.herokuapp.com/rooms
// Method: POST
// Data required: title,image,description

// Update a room:
// Endpoint: https://coded-task-axios-be.herokuapp.com/rooms/${roomId}
// Method: PUT
// Data required: title,image,description

// Delete a room:
// Endpoint: https://coded-task-axios-be.herokuapp.com/rooms/${roomId}
// Method: Delete

// Create a msg:
// Endpoint: https://coded-task-axios-be.herokuapp.com/rooms/msg/${roomId}
// Method: POST
// Data required: msg

function App() {
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async () => {
    try {
      const response = await axios.get(
        "https://coded-task-axios-be.herokuapp.com/rooms"
      );
      setRooms(response.data);
    } catch (error) {
      window.alert(error);
    }
  };

  useEffect(() => {
    fetchRooms();
  });

  const createRoom = async (newRoom) => {
    try {
      const response = await axios.post(
        "https://coded-task-axios-be.herokuapp.com/rooms",
        newRoom
      );
      setRooms([...rooms, response.data]);
    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  };

  const deleteRoom = (id) => {
    try {
      const response = await axios.post(
        "https://coded-task-axios-be.herokuapp.com/rooms",
        newRoom
      );
      setRooms([...rooms, response.data]);
    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  };

  return (
    <div className="__main">
      <div className="main__chatbody">
        <Switch>
          <Route path="/room/:roomSlug">
            <ChatRoom rooms={rooms} />
          </Route>
          <Route exact path="/">
            <center>
              <ChatRoomsList rooms={rooms} createRoom={createRoom} />
            </center>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
