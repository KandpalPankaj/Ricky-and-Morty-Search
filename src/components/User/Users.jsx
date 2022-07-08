import axios from "axios";
import { useEffect, useState, useRef } from "react";
import "./user.css";
import { Card } from "../Card/card";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
export const Users = function ({ name }) {
  const [users, SetUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log("use effect of users")
    getData();
  }, [name]);
  function getData() {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`
      )
      .then(function (response) {
        // console.log(response.data.info.pages);
        setPages(response.data.info.pages);
        if (page > 1) {
          let arr = [...users, ...response.data.results];

          SetUsers(arr);
        } else {
          SetUsers(response.data.results);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };
  const firstEvent = (e) => {
    console.log("firstEvent in Users")
    var bottom =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;

    if (bottom) {
      setTimeout(() => {
        let pg = page + 1;
        if (pg <= pages) {
          setPage(pg);
          getData();
        }
      }, 200);
    }
  };
  return (
    <div className="user-Container" onScroll={firstEvent}>
      {users.map((e) => (
        <div
          key={e.id}
          className="flex"
          onClick={() => {
            setOpen(true);
            setUser(e);
          }}
        >
          <div className="imageDiv">
            <img src={e.image} alt="" />
          </div>
          <div className="name">{e.name}</div>
          <div className="status">
            <div className={e.status == "Alive" ? "live" : "unknown"}></div>
            {e.status}-{e.species}
          </div>
        </div>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style}>
        <div className="cross" onClick={handleClose}>X</div>
          <Card user={user} />
        </Box>
      </Modal>
    </div>
  );
};
