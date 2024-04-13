import { useEffect, useState } from "react";
import {
  ClickAwayListener,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Check, Edit } from "@mui/icons-material";
import "./namebar.sass";

const NameBar = () => {
  const [userName, setUserName] = useState("");
  const [editUserName, setEditUserName] = useState(false);
  const [validUserName, setValidUserName] = useState(false);

  const savedUserName = localStorage.getItem("chat_name");
  const handlerSaveName = () => {
    if (validUserName === true) {
      setEditUserName(false);
      localStorage.setItem("chat_name", userName);
    } else return;
  };
  const handlerEditName = () => {
    setEditUserName(true);
  };

  useEffect(() => {
    if (savedUserName && savedUserName !== null) {
      setUserName(savedUserName);
    } else setEditUserName(true);
  }, [savedUserName]);

  useEffect(() => {
    if (userName.length >= 3) {
      setValidUserName(true);
    } else setValidUserName(false);
  }, [userName, validUserName]);

  return (
    <ClickAwayListener
      onClickAway={() => {
        validUserName === false
          ? setEditUserName(true)
          : setEditUserName(false);
      }}
      mouseEvent={"onMouseDown"}
    >
      <div className="name_bar">
        {editUserName || validUserName === false ? (
          <TextField
            autoFocus
            value={userName}
            onChange={(event) => {
              event.preventDefault();
              setUserName(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handlerSaveName();
              }
            }}
            InputProps={{ sx: { height: 35 } }}
          />
        ) : (
          <Typography
            className="name_bar-typography"
            sx={{ color: "black", textOverflow: "ellipsis" }}
          >
            {userName}
          </Typography>
        )}
        <IconButton
          color="black"
          onClick={() =>
            editUserName || validUserName === false
              ? handlerSaveName()
              : handlerEditName()
          }
        >
          {editUserName || validUserName === false ? <Check /> : <Edit />}
        </IconButton>
      </div>
    </ClickAwayListener>
  );
};

export default NameBar;
