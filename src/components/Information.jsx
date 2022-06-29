import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Information.css";
import data from "../data.json";

const Information = () => {
  const { type, number } = useParams();
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [isFind, setIsFind] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const person = data.find(
      (item) => item.documentType == type && item.document == number
    );

    if (!person) {
      setIsFind(false);
      return;
    }

    setName(person.name);
    setLastname(person.lastname);
  }, []);

  const handleClickBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="container-information">
      <div className="container-content">
        {!isFind ? (
          <h3>No se ha encontrado la persona...</h3>
        ) : (
          <>
            <h2 className="title-information">Informacion basica</h2>
            <div className="container-items">
              <div className="item">
                <div className="subtitle">Primer apellido</div>
                <div className="content">{lastname}</div>
              </div>
              <div className="item">
                <div className="subtitle">Primer nombre</div>
                <div className="content">{name}</div>
              </div>
            </div>
          </>
        )}
        <div className="container-button-back">
          <Button variant="outline-primary" onClick={handleClickBack}>
            Volver
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Information;
