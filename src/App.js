import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const ExampleComponent = () => {

  const [boardData, setBoardData] = useState([]);
  const [boardLines, setBoardLines] = useState([]);

  const API_URL = "https://api.monday.com/v2";

  const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjIzNTQzMTk0NCwidWlkIjozOTE1Mzg1NywiaWFkIjoiMjAyMy0wMi0wOFQxMjowNDo1NS40MjlaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTUwNzk1NDMsInJnbiI6InVzZTEifQ.B6RAl4JoFr7XGF0ZatAnN8udxSxSJsc1MWz5-f859vc";

  const queryColumns = `
    query {
      boards (ids: [3943225207]) {
        name
        
        columns {
          title
        }


        items(limit:30, page:1) {
          name
          group {
            id
          }
          
          column_values {
            id
            value
            text
          }
        }
        
      }
    }
  `;

  const queryCreate = `
  mutation {
    create_item (board_id: 3943225207, item_name: "NEW ITEM!") {
    id
  } }
  `;



  async function fetchData() {
    const responseColumns = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        query: queryColumns
      })
    });

    const dataColumns = await responseColumns.json();
    setBoardData(dataColumns.data.boards[0].columns);
    setBoardLines(dataColumns.data.boards[0].items)
  }


  const [b, setB] = useState();
  if (b == undefined) {
    fetchData();
    setB("")
  }


  function newItem(event) {
    event.preventDefault()
    const responseColumns = fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        query: queryCreate
      })
    }).then(window.location.reload());
    
  }

    return (
      <>
        <table class="styled-table">
          <thead>
            <tr>
              {boardData.map(column => (
                <th style={{ "minWidth": "100px", "maxWidth": "150px" }} key={column.id}>{column.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {boardLines.map(column => (
              <tr key={column.id}>
                <th>{column.name}</th>
                <th>{column.column_values[0].text}</th>
                <th>{column.column_values[1].text}</th>
                <th>{column.column_values[2].text}</th>
                <th>{column.column_values[3].text}</th>
                <th>{column.column_values[4].text}</th>
                <th>{column.column_values[5].text}</th>
                <th>{column.column_values[6].text}</th>
                <th>{column.column_values[7].text}</th>
                <th>{column.column_values[8].text}</th>
                <th>{column.column_values[9].text}</th>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <button className="button-new" onClick={event => {newItem(event)}}>NEW ITEM</button> */}
      </>
    );
  };

  export default ExampleComponent;




