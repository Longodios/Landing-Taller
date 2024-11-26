import { useState } from "react";

const Carrusel = () => {

  // Estado para rastrear el botón seleccionado
  const [selectedIndex, setSelectedIndex] = useState(null);

    
    return(
        <>
        <h2 className="text-white text-center font-semibold text-4xl mt-5">Testimonios </h2>
        <section className="flex flex-col justify-center items-center mt-10 bg-black w-full">
            <div className=" w-42 border-3 border-white rounded-full  h-42 absolute">
                   <img src="/src/utils/imagenTestimonio.webp" alt="imagenTestimonio1" className="w-full object-cover rounded-full" />
            </div>
            <article className="w-80 h-[530px] border-1 border-white rounded-lg bg-tallerAzulMarino ">
                


  const toggleCard = (index) => {
    // Alterna el color del botón seleccionado
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <>
      <h2 className="text-white text-center font-semibold text-4xl mt-5 mb-10">
        Testimonios
      </h2>
      <section className="relative flex-col items-center mt-10 bg-black w-full justify-end px-4 inline-flex">
        <div className="w-[120px] border-3 border-white rounded-full h-[120px] absolute top-[-60px] z-10 shadow-lg">
          <img
            src="/src/utils/imagenTestimonio.webp"
            alt="imagenTestimonio1"
            className="w-full h-full object-cover rounded-full shadow"
          />
        </div>
        <article className="w-full p-3 flex flex-col items-center justify-center max-w-[600px] h-[530px] border-1 border-white rounded-xl bg-tallerAzulMarino relative shadow-black">
          <p className="text-white text-center text-lg leading-7">
            Llevamos trabajando con Talleres J. Longo desde hace más de una
            década. Su precisión en el mecanizado y la calidad de sus
            estructuras metálicas han sido fundamentales para nuestros proyectos
            de construcción. La profesionalidad de José y su equipo es
            excepcional, siempre cumplen con los plazos y sus precios son muy
            competitivos.
          </p>
          <div className="flex w-full">
            <div className="w-10 h-px bg-white mt-3" />
            <p className="text-white text-start text-lg ml-4"> Emilio </p>
          </div>
        </article>
        <div className="inline-flex w-full justify-center items-center mt-10 gap-3">
          {/* Genera botones dinámicamente */}
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              onClick={() => toggleCard(index)}
              className={`w-4 h-4 rounded-full ${
                selectedIndex === index ? "bg-tallerAmarillo" : "bg-white"
              }`}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
};

export default Carrusel;
