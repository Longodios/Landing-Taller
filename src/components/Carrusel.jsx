import { useState , useEffect } from "react";

import Ana from "../assets/images/Ana.webp";
import Xavi from "../assets/images/Xavi.webp";
import ImagenTestimonio from "../assets/images/ImagenTestimonio.webp";




const Carrusel = () => {

  const data = [
    {
      id: 1, 
      imagen: ImagenTestimonio,
      nombre: "Emilio",
      opinion: " Llevamos trabajando con Talleres J. Longo desde hace más de una década. Su precisión en el mecanizado y la calidad de sus estructuras metálicas han sido fundamentales para nuestros proyectos de construcción. La profesionalidad de Xavier y su equipo es excepcional, siempre cumplen con los plazos y sus precios son muycompetitivos."
    },
    {
      id: 2,
      imagen: Xavi,
      nombre: "Xavier",
      opinion: "Muy buen trato recibido, precios muy competitivos y muy profesionales en el desarrollo del trabajo a realizar"
    },
    {
      id: 3,
      imagen: Ana,
      nombre: "Ana",
      opinion: "Muy buen trato recibido, precios muy competitivos y muy profesionales en el desarrollo del trabajo a realizar"
    }
  ]

  const pageCarrusel = data.find((datos) => datos.id === 2);
  const [changePage, setChangePage] = useState(0);

  useEffect(() => { 
      const change = setInterval(() => {
        setChangePage((prevState) => (prevState + 1) % data.length);
      }, 3000);

      return () => clearInterval(change);

    
} , [data.length]);


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
        <article className="w-full h-full max-sm:h-[500px] md:h-[349px] md:max-w-[1200px] p-3 flex flex-col lg:flex-row items-center lg:justify-start lg:gap-6  rounded-xl bg-tallerAzulMarino shadow-black mt-3">
        

         <img
            src={data[changePage].imagen.src}
            alt="Imagen"
            className="z-10 h-full max-h-[120px] rounded-full"
          />
      

         <div className="lg:flex lg:flex-col">
          {
           
                
                <div id={data[changePage].id}>
                <p className="text-white text-lg max-sm:max-w-[267px]">{data[changePage].opinion} </p>
                <div className="inline-flex">
                     <span className="mt-3 w-12 h-[3px] bg-white "> </span>
                      <p className="text-white ml-5 text-lg">{data[changePage].nombre}  </p>
                </div>  
                </div>
               
              
            
          }
        
         
        </div>
        </article>
        <div className="inline-flex w-full justify-center items-center mt-10 gap-3">
          {/* Genera botones dinámicamente */}
          {data.map((_, index) => (
           
            <button
              key={index}
              onClick={() => setChangePage(index)}
              className={`w-4 h-4 rounded-full ${
                 changePage === index ? "bg-tallerAmarillo" : "bg-white"
              }`}
            ></button>
          ))}
        </div>
      </section>
     
    </>
  );
};
          

export default Carrusel;
