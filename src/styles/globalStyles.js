export const btnStyle = {
    color: "secondary.main",
    borderRadius: "1rem",
    transition:"all 0.6s ease-in-out",
    "&:hover": {
      backgroundColor: "secondary.main",
      color: "white",
    },
  }


 export const selectedStyle = {
    backgroundColor: "secondary.second",
    color: "white",
    borderRadius: "1rem",
    "&:hover": {
      backgroundColor: "secondary.main",
      color: "white",
    },
  }

  export const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };