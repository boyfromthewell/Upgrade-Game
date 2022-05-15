import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss";

function Home() {
  const [userName, setUserName] = useState("");

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
        <Link to={"/select-weapon"} state={{ userNickName: userName }}>
          시작하기
        </Link>
      </div>
    </div>
  );
}

export default Home;
