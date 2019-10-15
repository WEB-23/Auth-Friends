import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

Friends = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newFriend, setNewFriend] = useState({
    id: null,
    name: "",
    age: "",
    email: ""
  });
};
