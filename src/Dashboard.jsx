import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Modal } from "react-bootstrap";
import styled from "styled-components";

import kittenList from './kitten-list';
import sortKitten from "./utility";

// kitten table columns
const columns = [
  {
    id: 1,
    name: "name",
    selector: (row) => row.name,
    sortable: true,
    reorder: true
  },
  {
    id: 2,
    name: "age",
    selector: (row) => row.age,
    sortable: true,
    reorder: true
  },
  {
    id: 3,
    name: "ninja level",
    selector: (row) => row.ninjaLevel,
    sortable: true,
    reorder: true
  }
];

// styled components
const KittenImage = styled.img`
  width: 100%;
`;

const Button = styled.button`
  display: inline-block;
  color: ${props => props.primary ? "blue" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

export const Dashboard = () => {
  const [modalShow, setModalShow] = useState(false);
  const kittenData = kittenList.sort((a,b) => sortKitten(a,b));

  const handleRowClicked = () => {
    setModalShow(true);
  }

  const handleCloseModal = () => {
    setModalShow(false);
  }

  const LoremPixel = ({ width = 300, height = 300 }) => {
    const src = `https://placekitten.com/${width}/${height}?t=${Date.now()}`;
    return <KittenImage src={src} alt='Placeholder' />;
  }

  const customSort = (rows, selector, direction) =>
    rows.sort((rowA, rowB) => {
      // use the selector function to resolve your field names by passing the sort comparitors
      const aField = selector(rowA)
      const bField = selector(rowB)

      let comparison = 0;

      if (aField > bField) {
        comparison = 1;
      } else if (aField < bField) {
        comparison = -1;
      }

      return direction === 'desc' ? comparison * -1 : comparison;
    });

  return (<div>
    <DataTable
      title="Kittens"
      columns={columns}
      data={kittenData}
      pagination
      selectableRows
      onRowClicked={handleRowClicked}
      sortFunction={customSort}
    />

    <Modal
      show={modalShow}
      onHide={handleCloseModal}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Kitten Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoremPixel />
      </Modal.Body>
      <Modal.Footer>
        <Button primary onClick={handleCloseModal}>OK</Button>
        <Button onClick={handleCloseModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  </div>)
}

export default Dashboard;