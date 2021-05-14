import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { store } from "../../firebase/config";

const Todo = () => {
  const [customerId, setCustomerId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [list, setList] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const getCustomers = async () => {
      const { docs } = await store.collection("customers").get();
      const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setList(newArray);
    };
    getCustomers();
  }, []);

  const setCustomers = async (e) => {
    e.preventDefault();
    const customer = {
      name: name,
      phone: phone,
    };
    try {
      await store.collection("customers").add(customer);
      const { docs } = await store.collection("customers").get();
      const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setList(newArray);
      setName("");
      setPhone("");
    } catch (e) {
      console.log(e);
    }
  };

  const deleteCustomer = async (id) => {
    try {
      await store.collection("customers").doc(id).delete();
      const { docs } = await store.collection("customers").get();
      const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setList(newArray);
    } catch (e) {
      console.log(e);
    }
  };

  const editCustomer = async (id) => {
    try {
      const data = await store.collection("customers").doc(id).get();
      const { name, phone } = data.data();
      setName(name);
      setPhone(phone);
      setCustomerId(id);
      setEditMode(true);
    } catch (e) {
      console.log(e);
    }
  };

  const setUpdate = async (e) => {
    e.preventDefault();
    const updatedCustomer = {
      name: name,
      phone: phone,
    };
    try {
      await store.collection("customers").doc(customerId).set(updatedCustomer);
      const { docs } = await store.collection("customers").get();
      const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setList(newArray);
      setName("");
      setPhone("");
      setCustomerId("");
      setEditMode(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h1>Customers</h1>
      <div className="row">
        <div className="col-12 col-lg-6">
          <h2>Form</h2>
          <form
            onSubmit={editMode ? setUpdate : setCustomers}
            className="form-group"
          >
            <input
              value={name}
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-control mt-3"
              type="text"
              required
            />
            <input
              value={phone}
              placeholder="Phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="form-control mt-3"
              type="text"
              required
            />
            {editMode ? (
              <input
                type="submit"
                value="Save"
                className="btn btn-dark btn-block mt-3"
              />
            ) : (
              <input
                type="submit"
                value="Submit"
                className="btn btn-dark btn-block mt-3"
              />
            )}
          </form>
        </div>
        <div className="col-12 col-lg-6">
          <h2>List</h2>
          <ul className="list-group">
            {list.length !== 0 ? (
              list.map((item) => (
                <li className="list-group-item" key={item.id}>
                  {item.name} - {item.phone}
                  <button
                    onClick={(id) => {
                      deleteCustomer(item.id);
                    }}
                    className="btn btn-danger btn-sm float-right"
                  >
                    X
                  </button>
                  <button
                    onClick={(id) => {
                      editCustomer(item.id);
                    }}
                    className="btn btn-info btn-sm float-right mr-2"
                  >
                    EDIT
                  </button>
                </li>
              ))
            ) : (
              <div>Nothing to show.</div>
            )}
          </ul>
        </div>
      </div>
      <Link className="btn btn-secondary btn-block mt-5" to="/">
        Home
      </Link>
    </div>
  );
};

export default Todo;
