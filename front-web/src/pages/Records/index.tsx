import React, { useEffect, useState } from "react";
import "./styless.css";
import axios from "axios";
import { RecordsResponse } from "./types";
import { formatDiagnosticsWithColorAndContext } from "typescript";
import {formtDate} from './helpers'

const BASE_URL = "http://localhost:8080";

const Records = () => {
  const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
  console.log(recordsResponse);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/records?linesPerPage=12`)
      .then((response) => setRecordsResponse(response.data));
  }, []);

  return (
    <div className="page-container">
      <table className="records-table" cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>INSTANTE</th>
            <th>NOME</th>
            <th>IDADE</th>
            <th>PLATAFORMA</th>
            <th>GENERO</th>
            <th>TITULO DO GAME</th>
          </tr>
        </thead>
        <tbody>
          {recordsResponse?.content.map((record) => (
            <tr key={record.id}>
              <td>{formtDate(record.moment)}</td>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td className="text-secondary">{record.gameplatform}</td>
              <td>{record.genreName}</td>
              <td className="text-primary">{record.gameTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Records;
