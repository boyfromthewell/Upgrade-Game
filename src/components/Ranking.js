import React, { useEffect, useState } from "react";
import { db } from "../firebase.js";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import "../styles/Ranking.scss";
import { useNavigate } from "react-router-dom";

function Ranking() {
  const [userRanking, setUserRanking] = useState([]);
  const nagivate = useNavigate();
  useEffect(() => {
    const q = query(
      collection(db, "ranking"),
      orderBy("Ranking", "desc"),
      orderBy("Date")
    );
    onSnapshot(q, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserRanking(newData);
    });
  }, []);

  const replay = () => {
    nagivate(-1);
  };

  return (
    <div className="main">
      <div className="ranking-container">
        <div className="ranking-nav-bar">
          <span>순위</span>
          <span>닉네임</span>
          <span>강화 등급</span>
        </div>
        {userRanking.map((item, idx) => {
          return (
            <div className="user-bar" key={idx}>
              <span className="rank-span">{idx + 1}</span>
              <span style={{paddingRight:"2%"}}>{item.NickName}</span>
              <span className="upgrade-span">{item.Ranking}</span>
            </div>
          );
        })}
      </div>
      <button className="replay" onClick={replay}>
        다시 플레이
      </button>
    </div>
  );
}

export default Ranking;
