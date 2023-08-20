import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderAdm } from "../../components/Header Adm";

import { Banner } from "../../components/Banner";
import { Session } from "../../components/Session";
import { CardAdm } from "../../components/Card Adm";
import { FiEdit } from "react-icons/fi";
import { Container } from "./styles";

import { api } from "../../services/api";

export function HomeAdm() {
  const [pratos, setPratos] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleEdit(id) {
    navigate(`/editarprato/${id}`);
  }

  function handleDetails(id) {
    navigate(`/pratoadm/${id}`);
  }

  useEffect(() => {
    async function fetchPratos() {
      const response = await api.get("/prato");
      setPratos(response.data);
    }

    
    fetchPratos();
  }, []);

  useEffect(() => {
   async function fatchPratos(){
    const response = await api.get(`/prato?name=${search}`)
    setPratos(response.data)
   }

   fatchPratos()
  }, [search]);

  return (
    <Container>
      <HeaderAdm onChange={(e) => setSearch(e.target.value)} />
      <Banner />
      <Session title="Refeições">
        <div className="carrossel">
          {pratos.map((prato) => {
            if (prato.category == "Refeicao") {

    
              return (
                <CardAdm
                  key={String(prato.id)}
                  imagem={`${api.defaults.baseURL}/files/${prato.imagem}`}
                  name={prato.name}
                  description={prato.description}
                  price={prato.price}
                  onClick={() => handleEdit(prato.id)}
                  onDoubleClick={() => handleDetails(prato.id)}
                />
              );
            }
          })}
        </div>
      </Session>

      <Session title="Sobremessas">
        <div className="carrossel">
          {pratos.map((prato) => {
            if (prato.category == "Sobremessa") {
              return (
                <CardAdm
                  key={String(prato.id)}
                  imagem={`${api.defaults.baseURL}/files/${prato.imagem}`}
                  name={prato.name}
                  description={prato.description}
                  price={prato.price}
                  onClick={() => handleEdit(prato.id)}
                />
              );
            }
          })}
        </div>
      </Session>
    </Container>
  );
}
