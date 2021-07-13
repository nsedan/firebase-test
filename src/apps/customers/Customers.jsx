import { useState, useEffect } from "react";
import { store } from "../../firebase/config";
import classes from "./Customers.module.css";

const Customers = () => {
  const [customerId, setCustomerId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [list, setList] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCustomers = async () => {
      setIsLoading(true);
      const { docs } = await store.collection("customers").get();
      setIsLoading(false);
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
      setIsLoading(true);
      await store.collection("customers").add(customer);
      const { docs } = await store.collection("customers").get();
      setIsLoading(false);
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
      setIsLoading(true);
      await store.collection("customers").doc(id).delete();
      const { docs } = await store.collection("customers").get();
      setIsLoading(false);
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
      setIsLoading(true);
      await store.collection("customers").doc(customerId).set(updatedCustomer);
      const { docs } = await store.collection("customers").get();
      setIsLoading(false);
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
    <div className={classes.customers}>
      <h1>Customers</h1>
      <div className={classes.row}>
        <div className={classes.col}>
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
              className={classes.input}
              type="text"
              required
            />
            <input
              value={phone}
              placeholder="Phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className={classes.input}
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
            <small>Format: 020-555-1495</small>
            {editMode ? (
              <input
                type="submit"
                value="Save"
                className={classes.submitBtn}
                disabled={isLoading && "disabled"}
              />
            ) : (
              <input
                type="submit"
                value="Submit"
                className={classes.submitBtn}
                disabled={isLoading && "disabled"}
              />
            )}
          </form>
        </div>
        <div className={classes.col}>
          <h2>List</h2>
          <ul className={classes.list}>
            {isLoading ? (
              <p>Loading...</p>
            ) : list.length !== 0 ? (
              list.map((item) => (
                <li className={classes.listItem} key={item.id}>
                  {item.name} - {item.phone}
                  <button
                    onClick={(id) => {
                      editCustomer(item.id);
                    }}
                    className={classes.editBtn}
                  >
                    EDIT
                  </button>
                  <button
                    onClick={(id) => {
                      deleteCustomer(item.id);
                    }}
                    className={classes.deleteBtn}
                  >
                    X
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
};

export default Customers;
