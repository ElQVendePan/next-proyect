import MainTitles from "@/components/MainTitles";
import GenericCard from "@/components/GenericCard";
import DestinationCard from "@/components/DestinationCard";
import CreateYourTrip from "@/components/CreateYourTrip"
import BasicData from "@/components/BasicData"
import WebHeader from "@/components/WebHeader";

const Home = () => {  
  return (
    <>
      <WebHeader title="Un destino, mil experiencias" subtitle="Descubre la magia de Colombia con Coopunicentro Travel: Tu guía confiable para explorar destinos únicos y vivir experiencias inolvidables." video="http://localhost:3000/colombia-video.mp4" />
      <MainTitles
        title="¿Que somos?"
        subtitle="Coopunicentro Travel: Explora con Confianza, Viaja con Pasión."
      />
      <div className="w-4/5 mx-auto text-zinc-300 relative">
        <div className="w-3/5 inline-block">
          <p>En el corazón de nuestras raíces se encuentra la Cooperativa Unicentro Cúcuta, una sólida Cooperativa con más de dos décadas de trayectoria, comprometida con el bienestar de sus asociados y beneficiarios. Desde este sólido cimiento, nace Coopunicentro Travel, nuestra agencia de viajes, para llevar la magia del turismo a todos nuestros miembros y al público en general.</p>
          <p className="mt-4">Coopunicentro Travel no es solo una agencia, somos una familia que comparte la emoción de descubrir nuevos horizontes. Únete a nosotros y deja que la pasión por viajar te lleve a experiencias inolvidables.</p>
          <div className="grid grid-cols-2 mt-14 gap-6 gap-y-10">
            <BasicData image="/icons/handshake.png" title="Orígenes Solidarios" description="Formamos parte de una cooperativa consolidada, guiada por principios de solidaridad. Lo que nos permite entender y satisfacer las necesidades de nuestros asociados." />
            <BasicData image="/icons/handshake.png" title="Ventajas Exclusivas" description="Ofrecemos beneficios exclusivos a nuestros asociados. Desde tarifas preferenciales hasta opciones de financiamiento, trabajamos para hacer que cada experiencia sea accesible y memorable." />
            <BasicData image="/icons/handshake.png" title="Pasión por el Turismo" description="Somos apasionados por el mundo del turismo. Nuestro equipo está compuesto por expertos entusiastas que comparten el deseo de brindar experiencias únicas." />
            <BasicData image="/logo-colombia.png" imageInvert={false} title="Colombia, Nuestro Primer Destino" description="En Coopunicentro Travel, iniciamos nuestras travesías explorando lo nuestro. Colombia, con su diversidad y encanto, es nuestro enfoque principal. ¡Descubre la magia de nuestra tierra con nosotros!" />
          </div>
        </div>
        <div className="absolute w-[36%] h-full top-0 right-0 overflow-hidden rounded-2xl shadow-2xl shadow-sky-950 ">
          <img src="/travel-map.jpg" className="w-full h-full object-cover" alt="Travel map" />
        </div>
      </div>
      <MainTitles
        title="Descubre Nuestros Beneficios"
        subtitle="En Coopunicentro Travel, marcamos la diferencia en cada experiencia de viaje."
      />
      {/*Beneficios*/}
      <div className=" w-4/5 mx-auto">
        <div className="grid grid-cols-5 gap-5">
          <GenericCard img="./icons/low-price.png" title="Precio Competitivo" description="Creemos que la aventura no debería comprometer tu bolsillo. Por eso, te ofrecemos precios competitivos que te permitirán explorar el mundo sin preocupaciones financieras. Descubre la magia de viajar con atractivas tarifas que se adaptan a tu presupuesto." />
          <GenericCard img="./icons/shield-check.png" title="Calidad Garantizada" description="Tu tiempo es valioso, y lo entendemos. Nos comprometemos a cumplir con cada detalle de tu itinerario según lo planificado. Así, puedes relajarte y disfrutar de tus vacaciones sin preocupaciones, sabiendo que todo se desarrollará como esperas." />
          <GenericCard img="./icons/task.png" title="Planes Garantizados" description="La promesa de aventuras increíbles es una garantía. Nuestros planes de viaje están meticulosamente organizados para ofrecerte experiencias inolvidables. Desde la planificación hasta la ejecución, confía en nosotros para llevar a cabo tus sueños de viaje con precisión y cuidado." />
          <GenericCard img="./icons/loan.png" title="Financia Tus Aventuras" description="Para nuestros valiosos asociados, Coopunicentro ofrece un servicio exclusivo de crédito. Facilitamos la planificación de tus viajes al proporcionar opciones de financiamiento flexibles. Disfruta de la libertad de explorar el mundo sin preocuparte por el impacto en tu bolsillo." />
          <GenericCard img="./icons/healthcare.png" title="Assist Card" subtitle="Asistencia Médica Internacional" description="Tu seguridad es nuestra prioridad. Obtén automáticamente la prestigiosa Assist Card en cada viaje. Viaja con confianza, con cobertura completa en emergencias médicas y respaldo las 24 horas. Descubre el mundo sabiendo que tu salud está protegida con nosotros." />
        </div>
      </div>
      {/*Destinos populares*/}
      <MainTitles title="Destinos Principales" subtitle="Descubre nuestros destinos más populares. ¡Viaja a lo mejor!" />
      <div className=" w-4/5 mx-auto grid grid-cols-3 grid-rows-2 gap-6">
        <DestinationCard key="destination-1" addStyles={"row-span-2"} name="Capurganá" image="/destinations/capurgana.jpg" location="Chocó" />
        <DestinationCard key="destination-2" name="Pasto" image="/destinations/pasto.jpg" location="Nariño" />
        <DestinationCard key="destination-3" name="Santiago de Tolú" image="/destinations/tolu.jpg" location="Sucre" />
        <DestinationCard key="destination-4" name="Neiva" image="/destinations/neiva.jpg" location="Huila" />
        <DestinationCard key="destination-5" name="San Andres Isla" image="/destinations/san-andres.jpg" location="San Andres Isla" />
      </div>
      <CreateYourTrip />
    </>
  );
}

export default Home