import React from "react";
import { useNavigate } from "react-router-dom";
import { postPet } from "../../services/pets";

import "./styles.css";

export default function CreatePetForm() {
  let navigate = useNavigate();

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      breed: formData.get("breed"),
      age: formData.get("age"),
      species: formData.get("species"),
      gender: formData.get("gender"),
      /* tutor: formData.get('tutor'), */
      url: formData.get("image"),
    };

    await postPet(data);
    navigate("/");
  };
  return (
    <main className="container">
      <div className="title">
        <h1>🐾Criar lista Pet🐾</h1>
      </div>
      <div className="flex">
        <div>
          <img
            src="https://static.wixstatic.com/media/1b82a5_503c2f4782ee416b8d65b75b3b9bea42~mv2.jpg/v1/fill/w_800,h_600,al_c,q_90/1b82a5_503c2f4782ee416b8d65b75b3b9bea42~mv2.jpg"
            alt="Pet"
            className="image"
          />
        </div>
        <form onSubmit={handleSubmitForm} className="form">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="🐾Insira o nome do pet🐾"
          />
          <label htmlFor="breed">Raça</label>
          <input
            type="text"
            name="breed"
            placeholder="🐾Insira a raça do pet🐾"
          />
          <label htmlFor="age">Idade</label>
          <input
            type="number"
            name="age"
            placeholder="🐾Insira a idade do pet🐾"
          />
          <label htmlFor="species">Espécie</label>
          <select name="species">
            <option value="cachorro">Cachorro</option>
            <option value="gato">Gato</option>
          </select>
          <label htmlFor="gender">Gênero</label>
          <select name="gender">
            <option value="macho">Macho</option>
            <option value="femea">Fêmea</option>
          </select>
          <label htmlFor="tutor">Tutor</label>
          <input
            type="text"
            name="tutor"
            placeholder="Insira o nome do tutor"
          />
          <label htmlFor="image">Imagem</label>
          <input type="url" name="image" placeholder="Insira a url da imagem" />
          <button>🐾🐾 Criar 🐾🐾</button>
        </form>
      </div>
    </main>
  );
}
