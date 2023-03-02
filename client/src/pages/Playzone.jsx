import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { getRandomWord, updateScore } from "../reducer/app/actions";
const Playzone = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { currentUser, isLoading, word, isError, score, timeout } = useSelector(
    (store) => store
  );

  const [timer, setTimer] = useState(+timeout);
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onChange = (input) => {
    setInput(input);
    if (input.length === word.length) {
      if (input === word) {
        dispatch(getRandomWord({ name: currentUser, level: timeout }));
        dispatch(updateScore({ user: currentUser, score: word.length }));
      } else {
        dispatch(updateScore({ user: currentUser, score: -word.length }));
      }
    }
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  useEffect(() => {
    setTimeout(() => {
      setInput("");
      navigate("/");
    }, parseInt(timeout) * 1000);
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      }
    }, 1000);
    return () => {
      clearTimeout();
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">MASAI WORD GAME</h1>
      <div className="flex">
        <div>
          <div>
            <p>GIVEN WORD</p>
            <input
              className="border px-2 py-1 bg-slate-200 text-2xl"
              value={word}
              type="text"
              disabled
            />
          </div>
          <div>
            <p>ENTERED WORD</p>
            <input
              className="border px-2 py-1 bg-slate-200 text-2xl"
              value={input}
              type="text"
              disabled
            />
          </div>
        </div>
        <div>
          <p>Score:{score}</p>
          <p>Timer:{timer}</p>
        </div>
      </div>
      <div className="mt-4">
        <Keyboard
          keyboardRef={(r) => (keyboard.current = r)}
          layoutName={layout}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
};

export default Playzone;
