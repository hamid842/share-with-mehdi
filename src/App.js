import React, { Component } from "react";
import { data } from "./constants/jsonData";

class App extends Component {
  render() {
    return (
      <div className="App">
        {data.map(item => {
          return (
            <div>
              <h6>{item.code}</h6>
              <h6>{item.name}</h6>
              <h6>{item.createdAt}</h6>
              <h6>{item.productCategoryId}</h6>
              <ul>
                {item.productCategoryIds.map(element => {
                  return (
                    <div>
                      <h6>{element.code}</h6>
                      <h6>{element.name}</h6>
                      <h6>{element.createdAt}</h6>
                      <h6>{element.productCategoryId}</h6>
                      <h6>{element.productCategoryIds}</h6>
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
