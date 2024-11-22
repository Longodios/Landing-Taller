import react from '@astrojs/react';
import imagenTestimonio from "/src/utils/imagenTestimonio.webp";



const Carrusel = () => {
    
    return(
        <>
        <h2 className="text-white text-center font-semibold text-4xl mt-5">Testimonios </h2>
        <section className="flex flex-col justify-center items-center mt-10 bg-black w-full">
            <div className=" w-42 border-3 border-white rounded-full  h-42 absolute">
                   <img src="/src/utils/imagenTestimonio.webp" alt="imagenTestimonio1" className="w-full object-cover rounded-full" />
            </div>
            <article className="w-80 h-[530px] border-1 border-white rounded-lg bg-tallerAzulMarino ">
                

            </article>
        </section>   
        </>
    )
}


export default Carrusel;