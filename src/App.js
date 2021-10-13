import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import ChatRoomsList from "./components/ChatRoomsList";
import { Route, Switch } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import CreateRoomModal from "./components/CreateRoomModal";
import ChatRoomitem from "./components/ChatRoomitem";

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
      console.log(response.data);
      setRooms(response.data);
    } catch (error) {
      window.alert(error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const createRoom = async (newRoom) => {
    try {
      const response = await axios.post(
        "https://coded-task-axios-be.herokuapp.com/rooms",
        newRoom
      );
      setRooms([...rooms, response.data]);
    } catch (error) {
      window.alert(error);
    }
  };

  const deleteRoom = async (id) => {
    console.log("roomId", id);
    console.log(`https://coded-task-axios-be.herokuapp.com/rooms/${id}`);
    try {
      const response = await axios.delete(
        `https://coded-task-axios-be.herokuapp.com/rooms/${id}`
      );
      let tempRoom = rooms.filter((room) => room.id !== id);
      setRooms(tempRoom);
    } catch (error) {
      window.alert(error);
    }
  };

  const updateRoom = async (roomId, data) => {
    try {
      const response = await axios.put(
        `https://coded-task-axios-be.herokuapp.com/rooms/${roomId}`,
        data
      );
      let updatedRooms = rooms.map((room) =>
        room.id === roomId ? response.data : room
      );

      setRooms(updatedRooms);
    } catch (error) {
      window.alert(error);
    }
  };

  const createMsg = async (roomId, msg) => {
    try {
      const response = await axios.post(
        `https://coded-task-axios-be.herokuapp.com/rooms/msg/${roomId}`,
        msg
      );
      fetchRooms();
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <div className="__main">
      <div className="main__chatbody">
        <Switch>
          <Route path="/room/:roomSlug">
            <ChatRoom rooms={rooms} createMsg={createMsg} />
          </Route>
          <Route exact path="/">
            <center>
              <ChatRoomsList
                rooms={rooms}
                createRoom={createRoom}
                deleteRoom={deleteRoom}
                updateRoom={updateRoom}
              />
            </center>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
