import React from "react";
import { MdSend } from "react-icons/md";

const AddForm = ({
  name,
  salary,
  edit,
  handleName,
  handleSalary,
  handleSubmit,
}) => {
  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleName}
          ></input>
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            placeholder="Salary"
            name="salary"
            value={salary}
            onChange={handleSalary}
          ></input>
        </div>
      </div>
      <button className="btn btn-md btn-danger mt-2 mb-3">
        {edit ? "Edit" : "Submit"}
        <MdSend className="deleteBtn" />
      </button>
    </form>
  );
};

export default AddForm;
