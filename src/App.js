import React, { useState, useEffect } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import ContactList from "./components/ContactList";
import Alert from "./components/Alert";
import uuid from "react-uuid";
// Local Storage  setup
const initContacts = localStorage.getItem("contacts")
  ? JSON.parse(localStorage.getItem("contacts"))
  : [];

const App = () => {
  const [contacts, setContacts] = useState(initContacts);
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  // console.log(contacts);

  // Get data from local storage

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSalary = (e) => {
    setSalary(e.target.value);
  };
  const handleContacts = (name, salary) => {
    // console.log(name, salary);
    setContacts([...contacts, { id: uuid(), name, salary }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && salary > 0) {
      if (edit) {
        let tempContacts = contacts.map((contact) => {
          return contact.id === id ? { ...contact, name, salary } : contact;
        });
        handleAlert("success", "Contact Edited");
        setEdit(false);
        setContacts(tempContacts);
      } else {
        handleContacts(name, salary);
        handleAlert("success", "Contact Added");
      }
      setSalary("");
      setName("");
    } else {
      //Alert called
      handleAlert(
        "danger",
        "Name Can't be empty value and salary has to be bigger than zero"
      );
    }
  };
  // Handle Alert
  const handleAlert = (type, text) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 2500);
  };

  // HandleClear
  const handleClear = () => {
    setContacts([]);
    handleAlert("danger", "Cleared all contacts");
  };

  // HandleDelete
  const handleDelete = (id) => {
    // console.log("Delete", id);
    let tempContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(tempContacts);
    handleAlert("danger", "Contact deleted");
  };
  // HandleEdit
  const handleEdit = (id) => {
    let contact = contacts.find((contact) => {
      return contact.id === id;
    });
    let { name, salary } = contact;
    setId(id);
    // console.log("Edit", id);
    setName(name);
    setSalary(salary);
    setEdit(true);
  };
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h3 className="text-center my-4">Contact Manager</h3>
      <div className="container">
        <div className="card mx-auto">
          <AddForm
            handleSubmit={handleSubmit}
            edit={edit}
            name={name}
            salary={salary}
            handleName={handleName}
            handleSalary={handleSalary}
          />
          <ContactList
            contacts={contacts}
            handleClear={handleClear}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>

      <h4 className="text-center mt-3">
        Total Salary:{" "}
        <span className="badge badge-success">
          $
          {contacts.reduce((acc, curr) => {
            return acc + parseInt(curr.salary);
          }, 0)}
        </span>
      </h4>
    </>
  );
};

export default App;
