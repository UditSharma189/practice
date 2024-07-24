import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUserForm = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const queryClient = useQueryClient();
  const history = useNavigate();

  const addUser = async (body) => {
    console.log(body, "bodyt")
    const res = await axios.post("http://localhost:8000/users", body);
    console.log(res,"res");
    return res;
  };

  const addNewUser = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
  const handleAddUser = (event) => {
    console.log(id, name, email, phone, "coming")
    event.preventDefault();
    const user = {
      id,
      name,
      email,
      number: phone,
    };
    console.log(user);
    addNewUser.mutate(user);

    history('/')
  };

  return (
    <form>
      <div style={{ margin: "1%" }}>
        <label>Id : </label>
        <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
      </div>

      <div style={{ margin: "1%" }}>
        <label>Name : </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div style={{ margin: "1%" }}>
        <label>Email : </label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div style={{ margin: "1%" }}>
        <label>Number : </label>
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </div>

      <button onClick={handleAddUser}>Submit</button>
    </form>
  );
}

export default AddUserForm;