import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

Friends = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newFriend, setNewFriend] = useState({
    id: null,
    name: "",
    age: "",
    email: ""
  });

  useEffect(() => {
    const url = "http://localhost:5000/api/friends";
    axiosWithAuth()
      .get(url)
      .then(res => {
        setFriends(res.data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => {
    e.preventDefault();
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
    console.log(newFriends);
  };

  const handleSubmit = e => {
    const friend = {
      name: newFriend.name,
      email: newFriend.email,
      age: newFriend.age,
      key: newFriend.id
    };

    const url = "http://localhost:5000/api/friends";

    // when you are posting to a protected api, use your utils
    axiosWithAuth()
      .post(url, { ...friend })
      .then(res => {
        setFriends({ ...friends, [e.target.name]: e.target.value });
      })
      .catch(err => console.log(err));
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={newFriend.username}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={newFriend.email}
        />

        <label>age</label>
        <input
          type="number"
          name="age"
          placeholder="age"
          onChange={handleChange}
          value={newFriend.age}
        />

        <input type="submit" />
      </form>

      <Card.Group itemsPerRow={4}>
        {friends.map(friend => {
          return (
            <Card>
              <Card.Content header={friend.name} />
              <Card.Content description={`Email: ${friend.email}`} />
              <Card.Content extra>age: {friend.age}</Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    </div>
  );
};

export const Friends;
