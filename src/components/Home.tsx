import "./Home.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [document, setDocument] = useState({
    type: 0,
    number: "",
  });
  const navigate = useNavigate();

  const handleClickSearch = () => {
    navigate(`/${document.type}/${document.number}`, { replace: true });
  };

  const handleChange = (event: any) => {
    const { target } = event;
    const { name, value } = target;
    const newData = { ...document, [name]: value };
    setDocument(newData);
  };

  return (
    <div className="container-home">
      {/* <div className="title">Home</div> */}
      <div className="container-inputs">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="select">Tipo de documento:</Form.Label>
            <Form.Select
              id="select"
              name="type"
              onChange={handleChange}
              defaultValue={document.type}>
              <option disabled value={0}>
                -- Seleciona una opcion --
              </option>
              <option value={"cc"}>Cedula de ciudadania</option>
              <option value={"passport"}>Pasaporte</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Numero de documento:</Form.Label>
            <Form.Control
              type="number"
              name="number"
              onChange={handleChange}
              defaultValue={document.number}
            />
          </Form.Group>
          <div className="container-button">
            <Button
              variant="outline-primary"
              className="button-primary"
              onClick={handleClickSearch}
              disabled={
                document.type == 0 ||
                document.number.toString().length < 8 ||
                document.number.toString().length > 11
              }>
              Buscar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Home;
