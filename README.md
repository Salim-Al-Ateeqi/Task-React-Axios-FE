# Chatting website

## First things first:

1. fork
2. clone
3. `cd ` to the folder
4. `yarn install`
5. `yarn start`

## Instructions

1. Install Axios `yarn add axios`
2. in App.js `import axios from "axios"`

## Fetch rooms :

1. a state for rooms is created for you in App.js
2. in App.js create a fetchRooms function ( make sure to use : async , await, try and catch )
3. fetchRooms should be triggred once App is rendered
4. dont forget to setRooms based on the response

## Create a room:

1. a createRoom function has been created in App.js
2. pass it to ChatRoomList component
3. then pass it to CreateRoomModel component
4. in CreateRoomModel a room state has been created for you
5. fix the missing code in : handleChange, handleSubmit (read the comments they have hints)
6. in App.js complete createRoom function ( make sure to use : async , await, try and catch )
7. dont forget to add the new room to the list of rooms

## Delete a room :

1. a deleteRoom function has been created in App.js
2. pass it to ChatRoomList component
3. then pass it to ChatRoomitem component
4. in ChatRoomitem fix the missing code in : handleDelete (read the comments they have hints)
5. in App.js complete deleteRoom function ( make sure to use : async , await, try and catch )
6. dont forget to delete the room from the list of rooms

### Challenge

## Update , Create a msg:

no steps ! its a challenge

## here are all the APIs:

```js
Endpoints:
Fetch all rooms:
Endpoint: https://coded-task-axios-be.herokuapp.com/rooms
GET

Create a room:
Endpoint: https://coded-task-axios-be.herokuapp.com/rooms
Method: POST
Data required: title,image,description

Update a room:
Endpoint: https://coded-task-axios-be.herokuapp.com/rooms/${roomId}
Method: PUT
Data required: title,image,description

Delete a room:
Endpoint: https://coded-task-axios-be.herokuapp.com/rooms/${roomId}
Method: Delete

Create a msg:
Endpoint: https://coded-task-axios-be.herokuapp.com/rooms/msg/${roomId}
Method: POST
Data required: msg


```
