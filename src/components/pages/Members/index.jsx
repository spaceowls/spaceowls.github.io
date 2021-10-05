import React from "react";

import logo from "../../../img/logo.svg";
import NameGit from "../../utils/NameGit";
import { MembersStyles, Reset } from "./styles";

const Members = () => {
  return (
    <MembersStyles>
      <Reset />
      <div className="members__title">
        <img src={logo} alt="Logo do titulo space owls" />
        <h2>
          Space <span>OWLS</span>
        </h2>
      </div>

      <div className = "members__list">
        <NameGit name="Antonio" link="https://github.com/Antoni0o" />
        <NameGit name="Gustavo Lage" link="https://github.com/gustavodev200" />
        <NameGit name="João Carlos" link="https://github.com/Joao620" />
        <NameGit name="Lucas André" link="https://github.com/llofyy" />
        <NameGit name="Erisvaldo S. " link="https://github.com/Erisvaldo15" />
      </div>
    </MembersStyles>
  );
};

export default Members;
