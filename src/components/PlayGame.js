import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/PlayGame.scss";

function PlayGame() {
  let { state } = useLocation();

  let [upgradeRank, setUpgradeRank] = useState(0);

  let [mouseOver, setMouseOver] = useState(false);

  console.log(state);
  const upgradePercent = [
    100, 100, 100, 100, 80, 70, 60, 50, 40, 30, 25, 15, 14, 13, 12, 7, 5, 4, 3,
    2, 1,
  ];

  const upgradeBtn = () => {
    if (upgradeRank === 21) {
      alert("최대 수치에 도달하였습니다.");
      return;
    }
    setTimeout(() => {
      let random_num = Math.floor(Math.random() * 101);
      console.log(random_num);

      if (random_num >= upgradePercent[upgradeRank] && upgradeRank >= 12) {
        setUpgradeRank(upgradeRank - 1);
        alert("강화 실패 (강화 수치가 한단계 내려갑니다)");
        return;
      }
      if (random_num <= upgradePercent[upgradeRank]) {
        setUpgradeRank(upgradeRank + 1);
        alert("강화 성공");
        return;
      } else {
        alert("강화 실패");
        return;
      }
    }, 2000);
  };
  return (
    <div className="play-main-container">
      <PercentTable
        upgradePercent={upgradePercent}
        setMouseOver={setMouseOver}
        mouseOver={mouseOver}
      />
      <div className="play-container">
        <div>
          <img src={state.img} alt="" />
        </div>
        <div className="upgrade-count">
          현재 등급 :{" "}
          <span style={{ color: "#b24189", fontWeight: "bold", fontSize: 30 }}>
            {upgradeRank}
          </span>
          강
        </div>
        {upgradeRank >= 12 ? (
          <span style={{ marginTop: 15, color: "gray" }}>
            실패시 강화 수치가 한단계 내려갑니다.
          </span>
        ) : null}
        <button className="upgrade-btn" onClick={upgradeBtn}>
          강화하기
        </button>
      </div>
      <div className="ranking-area">
        <button>랭킹 등록</button>
        <Link to="/ranking">랭킹 보기</Link>
      </div>
    </div>
  );
}

export default PlayGame;

function PercentTable({ upgradePercent, setMouseOver, mouseOver }) {
  return (
    <div className="table-container">
      <div
        className="mouse-over-area"
        onClick={() => {
          setMouseOver(!mouseOver);
        }}
      >
        확률표
      </div>
      {mouseOver ? (
        <table>
          <tbody>
            {upgradePercent.map((per, idx) => (
              <>
                <tr>
                  <td>
                    {idx}~{idx + 1}
                  </td>
                  <td>{per}%</td>
                </tr>{" "}
              </>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}
