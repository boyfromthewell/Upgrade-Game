import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/SelectWeapon.scss";
import Weapon1 from "../images/weapon1.png";
import Weapon2 from "../images/weapon2.png";
import Weapon3 from "../images/weapon3.png";
import Weapon4 from "../images/weapon4.png";
import Weapon5 from "../images/weapon5.png";
import Weapon6 from "../images/weapon6.png";

function SelectWeapon() {
  let { state } = useLocation();
  console.log(state.userNickName);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="select-weapon-container">
        <p>강화할 무기를 선택하세요</p>
        <div className="image-container">
          <div>
            <Link
              to={"/play"}
              state={{ img: Weapon1, userNickName: state.userNickName }}
            >
              <img src={Weapon1} alt="" />
            </Link>
          </div>
          <div>
            <Link
              to={"/play"}
              state={{ img: Weapon2, userNickName: state.userNickName }}
            >
              <img src={Weapon2} alt="" />
            </Link>
          </div>

          <div>
            <Link
              to={"/play"}
              state={{ img: Weapon3, userNickName: state.userNickName }}
            >
              <img src={Weapon3} alt="" />
            </Link>
          </div>
          <div>
            <Link
              to={"/play"}
              state={{ img: Weapon4, userNickName: state.userNickName }}
            >
              <img src={Weapon4} alt="" />
            </Link>
          </div>
          <div>
            <Link
              to={"/play"}
              state={{ img: Weapon5, userNickName: state.userNickName }}
            >
              <img src={Weapon5} alt="" />
            </Link>
          </div>
          <div>
            <Link
              to={"/play"}
              state={{ img: Weapon6, userNickName: state.userNickName }}
            >
              <img src={Weapon6} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectWeapon;
