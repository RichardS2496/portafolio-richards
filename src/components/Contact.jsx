import { useState } from "react";
import "../styles/form.css";
import { EmailSVG } from "./EmailSVG";
import { PhoneSVG } from "./PhoneSVG";
import { LocationSVG } from "./LocationSVG";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5173/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Mensaje Enviado");
      })
      .catch((error) => {
        console.error("error:", error);
        alert("Hubo un error");
      });
  };

  return (
    <section
      id="contacto"
      className="flex flex-row w-full bg-slate-700 rounded-lg mb-3 p-16 gap-8"
    >
      <div className="w-1/2 flex flex-col gap-12">
        <h2 className="text-4xl font-bold text-neutral-400 ">Contacto</h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h6 className="text-lg flex flex-row gap-4 items-center">
              <PhoneSVG /> Número Telefónico
            </h6>
            <a
              className="text-xl pl-9 flex flex-col gap-4"
              href="tel+34643498478"
            >
              +34 643 498 478
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-lg flex flex-row gap-4 items-center">
              <EmailSVG />
              Correo Electrónico
            </h6>
            <a
              className="text-xl pl-9 flex flex-col gap-4"
              href="mailto:richardmsc24@gmail.com"
            >
              richardmsc24@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-lg flex flex-row gap-4 items-center">
              <LocationSVG /> Ubicación
            </h6>
            <p className="text-xl pl-9 ">Ciudad Real, España</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 ">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="input-detail">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-row gap-4">
            <div className="input-detail w-1/2">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-detail w-1/2">
              <label htmlFor="phone">Número Telefónico</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-detail">
            <label htmlFor="message">Mensaje</label>
            <textarea
              rows="4"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-end">
            <button className="mt-4 pl-12 pr-12 standard-btn" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
