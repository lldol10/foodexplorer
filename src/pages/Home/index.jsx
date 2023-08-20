import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Session } from "../../components/Session";
import { Card } from "../../components/Card";
import { api } from "../../services/api";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function Home() {
  const [pratos, setPratos] = useState([]);
  const navigate = useNavigate()
  const [search, setSearch] = useState("");
  function handleDetails(id) {
    navigate(`/prato/${id}`);
  }

  useEffect(() => {
    async function fetchPratos() {
      const meal = await api.get("/prato");
      setPratos(meal.data);
    }

    fetchPratos();
  }, []);

  useEffect(() => {
    async function fetchPratos() {
      const response = await api.get(`/prato?name=${search}`);
      setPratos(response.data)
      console.log(search)
    }

    fetchPratos();
  }, [search]);

  return (
    <Container>
      <Header /*onclick={onclick}*/ onChange={(e) => setSearch(e.target.value)}/>
      <Banner />
      <Session title="Refeições">
        <div className="carrossel">
          {pratos.map((prato) => {
            if (prato.category == "Refeicao") {
              return (
                <Card
                  key={String(prato.id)}
                  imagem={`${api.defaults.baseURL}/files/${prato.imagem}`}
                  name={prato.name}
                  price={prato.price}
                  onClick={() => handleDetails(prato.id)}
                />
              );
            }
          })}
        </div>
      </Session>

      <Session title="Pratos Principais">
        <div className="carrossel">
          {pratos.map((prato) => {
            if (prato.category == "Sobremessa") {
              return (
                <Card
                  key={String(prato.id)}
                  imagem={`${api.defaults.baseURL}/files/${prato.imagem}`}
                  name={prato.name}
                  price={prato.price}
                  onClick={() => handleDetails(prato.id)}
                />
              );
            }
          })}
        </div>
      </Session>
    </Container>
  );
}
