import React from "react";
import { Container } from "./styles";
import { MdAdd } from "react-icons/md"; //md = Material Design
import Card from "../Card";

function List({ data, index: listIndex }) {
  return (
    <>
      <Container done={data.done}>
        <header>
          <h2>{data.title}</h2>
          {data.creatable && (
            <button type="Button">
              <MdAdd size={24} color="#fff" />
            </button>
          )}
        </header>
        <ul>
          {data.cards.map((card, index) => (
            <Card
              key={card.id}
              listIndex={listIndex}
              index={index}
              data={card}
            />
          ))}
        </ul>
      </Container>
    </>
  );
}

export default List;
