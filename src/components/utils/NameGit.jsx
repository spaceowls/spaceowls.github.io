import React from "react";

import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const NameGit = ({ name, link }) => {
  return (
    <ListMembers>
      <h3>{name}</h3>
      <a href={link} target="_blank" rel="Link do Git Hub noreferrer">
        <FaGithub fontSize={30} color="#753CD4" />
      </a>
    </ListMembers>
  );
};

const ListMembers = styled.div`
    width: 85%;
    height: 2.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5em;

    h3{
        color: #fff;
        font-weight: bold;
        font-size:  2em;
    }

`;

export default NameGit;
