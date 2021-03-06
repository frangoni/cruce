import React, { useEffect } from "react";
import { Checkbox, Button } from "@material-ui/core/";
import SaveIcon from "@material-ui/icons/Save";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyCadeterias, fetchCadeterias, postMyCadeterias } from "../redux/actions/cadeterias";

const Cadeterias = () => {
  const dispatch = useDispatch();
  const { cadeterias, misCadeterias } = useSelector((state) => state.cadeterias);

  useEffect(() => {
    dispatch(fetchMyCadeterias());
    dispatch(fetchCadeterias());
    return () => { };
  }, []);

  const handlerCheck = (id) => {
    dispatch({ type: "ADD_MY_CADETERIA", payload: id });
  };

  const handlerClick = () => {
    dispatch(postMyCadeterias(misCadeterias));
  };
  return (
    <div id="checkBoxCadeterias" style={{ height: "10vh", width: "100%" }}>
      {cadeterias.length
        ? cadeterias.map((cadeteria, i) => (
          <div key={i} id="checkBoxCadeterias">
            {cadeteria.name}
            <Checkbox checked={misCadeterias.includes(cadeteria.id)} onClick={() => handlerCheck(cadeteria.id)} />
          </div>
        ))
        : null}
      <Button variant="contained" color="primary" size="small" onClick={handlerClick} startIcon={<SaveIcon />}>
        Guardar
      </Button>
    </div>
  );
};

export default Cadeterias;
