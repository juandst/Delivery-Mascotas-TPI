import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, FormControl } from "react-bootstrap";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search.length > 0 ? navigate("/search/" + search) : navigate("/");
    setSearch("");
  };
  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <FormControl type="search" placeholder="Buscar..." className="me-2" value={search} onChange={handleChange} />
      <Button variant="outline-warning" onClick={handleSubmit}>
        <img
          style={{ width: "25px", height: "auto" }}
          src="https://cdn.discordapp.com/attachments/989026778741899287/991826416071090246/magnifying-glass.png"
          alt="Search"
        />
      </Button>
    </Form>
  );
};

export default SearchBar;
