import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from '../presentational/Input';
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  render() {
    return (
    <form id="test-form" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Input
        text="Enter Your Name"
        label="name"
        type="text"
        id="name"
        />
        <div class="flex items-center justify-center">
            <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
        </div>
    </form>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("inner");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;