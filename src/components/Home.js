import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.scss";
import { useSelector, useDispatch } from "react-redux";
import { ADD_USER } from "../reducers/infoSlice";

function Home() {
  const [userName, setUserName] = useState("");

  const user = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(user);

  return (
    <div className="main">
      <div className="home-container">
        <label>닉네임을 입력하세요</label>
        <input
          required
          type="text"
          maxLength="30"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <button
          to={"/select-weapon"}
          onClick={() => {
            dispatch(ADD_USER(userName));
            navigate("/select-weapon");
          }}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}

export default Home;
