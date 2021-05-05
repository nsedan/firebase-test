import { useState, useEffect } from "react";
import { store } from "./firebaseconfig";

function App() {
  const [customerId, setCustomerId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [list, setList] = useState("");
  const [error, setError] = useState([]);
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
    if (!name.trim()) {
      setError("Name field is empty");
    }
    if (!phone.trim()) {
      setError("Phone field is empty");
    }
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
    if (!name.trim()) {
      setError("Name field is empty");
    }
    if (!phone.trim()) {
      setError("Phone field is empty");
    }
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
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2>Form</h2>
          <form
            onSubmit={editMode ? setUpdate : setCustomers}
            className="form-group"
          >
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-control mt-3"
              type="text"
            />
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="form-control mt-3"
              type="text"
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
          {error ? (
            <div>
              <p>{error}</p>
            </div>
          ) : (
            <span></span>
          )}
        </div>
        <div className="col">
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
                    className="btn btn-danger float-right"
                  >
                    DELETE
                  </button>
                  <button
                    onClick={(id) => {
                      editCustomer(item.id);
                    }}
                    className="btn btn-info float-right mr-2"
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
    </div>
  );
}

export default App;
