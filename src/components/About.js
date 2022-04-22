import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import ModelButton from "./model/ModelButton";

function About(props) {
  const [items, setItems] = useState([
    {
      name: "asdf",
      location: "vizag",
      profession: "business",
    },
    {
      name: "ghjk",
      location: "tpg",
      profession: "soft",
    },
  ]);

  const addEmployee = () => {
    let empDetails = {
      name: "ghjk",
      location: "tpg",
      profession: "soft"
    };
    setItems([...items, empDetails]);
  };
  return (
    <div>
      <ModelButton/>
      <button onClick={addEmployee}>Add</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> NAME</th>
            <th>LOCATION</th>
            <th>PROFESSION</th>
          </tr>
        </thead>
        <tbody>
          {items.map((ele, ind) => {
            return (
              <tr key={ind}>
                <td>{ind + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.location}</td>
                <td>{ele.profession}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* <About func={addRows} /> */}
    </div>
  );
}

export default About;
