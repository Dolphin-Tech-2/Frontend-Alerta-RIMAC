import Logo from '../assets/logo.png';
import Maps from '../assets/maps.jpeg';

export const Detalles = () => {
  return (
    <>
        <section className="bg-ri-red h-screen">
            <div className="flex flex-col items-center gap-y-8 py-8">
                <figure className='flex items-center bg-white h-36 w-36 rounded-full'>
                    <img src={Logo} alt="logo" />
                </figure>
                <h1 className="text-4xl font-bold text-ri-white drop-shadow-lg uppercase">Conflictos Sociales</h1>
            </div>
            <div className='gap-7 flex flex-col bg-ri-white rounded-t-[1.8rem] px-4 py-10'>
                <article className='space-y-3'>
                    <h1 className='text-ri-blue font-bold text-xl'>
                        Descripción
                    </h1>
                    <p className='text-ri-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas asperiores repellendus atque, quod consectetur vel beatae culpa dicta nihil?
                    </p>
                </article>
                <article className='space-y-3'>
                    <h1 className='text-ri-blue font-bold text-xl'>
                        Fecha y Hora
                    </h1>
                    <p className='text-ri-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quasi.
                    </p>
                </article>
                <article className='space-y-4'>
                    <h1 className='text-ri-blue font-bold text-xl'>
                        Recomendaciones
                    </h1>
                    <p className='text-ri-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas asperiores repellendus atque, quod consectetur vel beatae culpa dicta nihil?
                    </p>
                </article>
                <article className='space-y-3'>
                    <h1 className='text-ri-blue font-bold text-xl'>
                        Lugar
                    </h1>
                    <figure className='h-16 w-full'>
                        <img src={Maps} alt="" className='h-16 rounded-lg w-full aspect-square'/>
                    </figure>
                </article>

                <button className='bg-ri-red text-ri-white font-bold py-4 rounded-2xl'>
                    Reportar
                </button>
            </div>
        </section>
    </>
  )
}
