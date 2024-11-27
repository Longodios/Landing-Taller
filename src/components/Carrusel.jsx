import { useState } from "react";

const Carrusel = () => {

  // Estado para rastrear el botón seleccionado
  const [selectedIndex, setSelectedIndex] = useState(null);

  const toggleCard = (index) => {
    // Alterna el color del botón seleccionado
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <>
      
      <section className="relative flex-col lg:justify-center  items-center  w-full  px-4 flex ">
      <h2 className="text-white text-center font-semibold text-4xl mt-3">
        Testimonios

      </h2>
        <article className="w-full h-full max-sm:h-[500px] md:h-[420px] p-3 flex flex-col lg:flex-row items-center lg:justify-start lg:gap-6  rounded-xl bg-tallerAzulMarino shadow-black mt-3">
          <img
            src="/src/utils/imagenTestimonio.webp"
            alt="imagenTestimonio1"
            className="z-10 h-full max-h-[120px] rounded-full"
          />

         <div className="lg:flex lg:flex-col">
          <p className=" text-white text-lg max-sm:max-w-[267px]">
            Llevamos trabajando con Talleres J. Longo desde hace más de una
            década. Su precisión en el mecanizado y la calidad de sus
            estructuras metálicas han sido fundamentales para nuestros proyectos
            de construcción. La profesionalidad de José y su equipo es
            excepcional, siempre cumplen con los plazos y sus precios son muy
            competitivos.
          </p>
          <div className="inline-flex">
          <span className="mt-3 w-12 h-[3px] bg-white "> </span>
          <p className="text-white ml-5 text-lg"> Emilio </p>
           </div>
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
