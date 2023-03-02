import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRandomWord } from "../reducer/app/actions";
const Home = () => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(getRandomWord({ name, level }));
    navigate("/playzone");
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">MASAI WORD GAME</h1>
      <form
        onSubmit={submitForm}
        className="flex flex-col w-80 mx-auto mt-10 gap-0.5 border p-4"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-2 py-1"
          type="text"
          placeholder="Enter Name"
          required
        />
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="border px-2 py-1"
          required
        >
          <option value="">Choose Level</option>
          <option value="30">Easy Level - 30 Seconds</option>
          <option value="20">Medium Level - 20 Seconds</option>
          <option value="10">High Level - 10 Seconds</option>
        </select>
        <input
          className="border px-2 py-1 bg-slate-500 text-white font-bold text-2xl"
          type="submit"
          value="Start game"
        />
      </form>
    </div>
  );
};

export default Home;
