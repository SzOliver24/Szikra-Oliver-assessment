import { Input, Label } from "reactstrap";
import { useState } from "react";
const toWords = require("../../service/converter.js");

const Content = () => {
  const [words, setWords] = useState("");

  return (
    <div className="content">
      {words == "" ? <h3>Waiting for a number</h3> : <h3>{words}</h3>}
      <div className="field">
        <Label for="number">
          Please type here the number you want to convert:
        </Label>
        <Input
          id="number"
          bsSize="lg"
          className="mb-3"
          placeholder="type your number here"
          onChange={(e) => setWords(toWords(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Content;
