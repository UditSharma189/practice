// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import axios from "axios";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function User() {
  const fetchData = async () => {
    // const response = await fetch("http://localhost:8000/users" || "");

    // if (!response.ok) {
    //   throw new Error("Something went wrong. Try again.");
    // }

    // return response.json();
    const res = await axios.get("http://localhost:8000/users");
    return await res.data;
  };

  // const addUser = async (body) => {
  //   const res = await axios.post("http://localhost:8000/users", body);

  //   return res;
  // };

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["users"],
    queryFn: fetchData,
  });
  const queryClient = useQueryClient();
  // const addNewUser = useMutation({
  //   mutationFn: addUser,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["users"]);
  //   },
  // });
  // const handleAddUser = () => {
  //   const user = {
  //     id: "5",
  //     name: "Udit sharma",
  //     email: "udit@yahoo.com",
  //     number: "9782780121",
  //   };
  //   addNewUser.mutate(user);
  // };
  // Delete
  const deleteUser = async (id) => {
    const res = await axios.delete(`http://localhost:8000/users/${id}`);

    return res;
  };
  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  const handleUserDelete = (id) => {
    deleteUserMutation.mutate(id);
  };
  // console.log(isError);
  return (
    <>
      <div>Hello</div>
      {isLoading && <h1>Loading..</h1>}
      {isError && <h1>{"Something went wrong"}</h1>}
      <div>
        {isSuccess &&
          data?.map((user, index) => (
            <div key={index}>
              <h1>
                <span style={{ margin: "1%" }}>{user.name}</span>
                <button onClick={() => handleUserDelete(user.id)}>
                  Delete
                </button>
              </h1>
            </div>
          ))}
      </div>
      <Link to="/add">
        <button>Add User</button>
      </Link>
      {/* <button onClick={handleAddUser}>Add User</button> */}
    </>
  );
}

export default User;
