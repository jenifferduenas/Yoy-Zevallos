import React, { useState } from "react";
import "../CSS/styles.css";
import Patrono from "../images/Patrono.jpeg";
import logoYoyo from "../images/logoYoyo.png";
import covid1 from "../images/Covid1.jpg";
import covid2 from "../images/Covid2.jpg";
import covid3 from "../images/Covid3.jpg";
import covid4 from "../images/Covid4.jpg";
import covid5 from "../images/Covid5.jpg";
import covid6 from "../images/Covid6.jpg";
import covid7 from "../images/Covid7.jpg";
import covid8 from "../images/Covid8.jpg";
import covid9 from "../images/Covid9.jpg";
import covid10 from "../images/Covid10.jpg";
import covid11 from "../images/Covid11.jpg";
import covid12 from "../images/Covid12.jpg";
import covid13 from "../images/Covid13.jpg";
import covid14 from "../images/Covid14.jpg";
import covid15 from "../images/Covid15.jpg";
import covid16 from "../images/Covid16.jpg";
import covid17 from "../images/Covid17.jpg";
import covid18 from "../images/Covid18.jpg";
import covid19 from "../images/Covid19.jpg";
import covid20 from "../images/Covid20.jpg";
import covid21 from "../images/Covid21.jpg";
import covid22 from "../images/Covid22.jpg";
import covid23 from "../images/Covid23.jpg";
import covid24 from "../images/Covid24.jpg";
import covid25 from "../images/Covid25.jpg";
import covid26 from "../images/Covid26.jpg";
import covid27 from "../images/Covid27.jpg";
import covid28 from "../images/Covid28.jpg";
import covid29 from "../images/Covid29.jpg";
import Arcadinas from "../images/Arcadineas2020.png";
import Prevención from "../images/Prevención2020.jpg";
import Diario from "../images/PublicaciónDiario.jpg";
import ADISPOR from "../images/ReunionADISPOR.png";
import Fundación from "../images/OswaldoLoor.jpg";
import Manchecaña from "../images/Manchecaña.png";
import Yoyó from "../images/YoyóZevallos.png";
import intervención1 from "../images/Intervenciones1.jpg";
import intervención2 from "../images/Intervenciones2.jpg";
import intervención3 from "../images/Intervenciones3.jpg";
import intervención4 from "../images/Intervenciones4.jpg";
import intervención5 from "../images/Intervenciones5.jpg";
import intervención6 from "../images/Intervenciones6.jpg";
import intervención7 from "../images/Intervenciones7.jpg";
import intervención8 from "../images/Intervenciones8.jpg";
import intervención9 from "../images/Intervenciones9.jpg";
import ABRIL20211 from "../images/ABRIL20211.jpg";
import ABRIL20212 from "../images/ABRIL20212.jpg";
import ABRIL20213 from "../images/ABRIL20213.jpg";
import ABRIL20214 from "../images/ABRIL20214.jpg";
import JUNIO20211 from "../images/JUNIO20211.jpg";
import JUNIO20212 from "../images/JUNIO20212.jpg";
import JULIO20211 from "../images/JULIO20211.jpg";
import JULIO20212 from "../images/JULIO20212.jpg";
import circo1 from "../images/circo11.jpg";
import circo2 from "../images/circo11 (2).jpg";
import circo3 from "../images/circo11 (3).jpg";
import circo4 from "../images/circo11 (4).jpg";
import circo5 from "../images/circo11 (5).jpg";
import circo6 from "../images/circo11 (6).jpg";
import circo7 from "../images/circo11 (7).jpg";
import circo8 from "../images/circo11 (8).jpg";
import circo9 from "../images/circo11 (9).jpg";
import circo10 from "../images/circo11 (10).jpg";
import circo11 from "../images/circo11 (11).jpg";
import libro1 from "../images/libro21.jpg";
import libro2 from "../images/libro211.jpg";
import Agosto1 from "../images/agosto211.jpg";
import Agosto2 from "../images/agosto212.jpg";
import Agosto3 from "../images/agosto213.jpg";
import Teatro1 from "../images/teatroterapia1 (1).jpg";
import Teatro2 from "../images/teatroterapia1 (2).jpg";
import Teatro3 from "../images/teatroterapia1 (3).jpg";
import Teatro4 from "../images/teatroterapia1 (4).jpg";
import Teatro5 from "../images/teatroterapia1 (5).jpg";
import Teatro6 from "../images/teatroterapia1 (6).jpg";
import Septiembre from "../images/17SEP1.jpg";
import pedagogia from "../images/TC1.jpg";
import pedagogia2 from "../images/TC2.jpg";
import pedagogia3 from "../images/TC3.jpg";
import pedagogia4 from "../images/TC4.jpg";
import pedagogia5 from "../images/TC5.jpg"; 


// Swiper imports correctos para la versión 9+
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const timelineData = [
  {
    year: "1961 - 2012",
    title: "Yoyó Zevallos",
    description:
      "Un hombre cuya solidaridad, alegría y amor por la vida marcaron a todos los que lo conocieron.",
    extra:
      "Este fue el inicio de una vida que inspiraría más adelante a una fundación dedicada al arte y la felicidad. Su legado queda sembrado en quienes compartieron con él. Años más tarde, su espíritu se convertiría en la chispa para una obra colectiva. El recuerdo de su alegría se transformó en motivación para continuar con su filosofía de vida: 'El ser humano vino a este mundo para ser feliz'.",
    image: Patrono,
  },
  {
    year: "2019",
    title: "Fundación legalmente constituida",
    description:
      "El 4 de diciembre nace oficialmente la Fundación Sociocultural y de Ayuda Mutua 'Yoyó Zevallos'.",
    extra:
      "Desde entonces hemos trabajado por brindar beneficios psicoterapéuticos a través del arte.",
    image: logoYoyo,
  },
  {
    year: "Marzo 2020",
    title: "Pandemia COVID-19",
    description:
      "En la pandemia ocasionada por el virus COVID 19, nuestra organización, como un mecanismo de apoyo para los miembros de la comunidad manabita y nacional, ofreció atención psicoterapéutica gratuita.",
    carouselImages: [covid1, covid2, covid3, covid4, covid5, covid6, covid7, covid8, covid9, covid10,
      covid11, covid12, covid13, covid14, covid15, covid16, covid17, covid18, covid19, covid20,
      covid21, covid22, covid23, covid24, covid25, covid26, covid27, covid28, covid29], 
  },
    {
    year: "Junio de 2020",
    title: "Reunión con programa educativo “Arcandinas”",
    description:
      "La Fundación Sociocultural y de Ayuda Mutua Yoyó Zevallos tuvo reuniones con Pablo Palacios y María Elena Ordóñez del programa educativo Arcandina.",
    extra:
      "Con el objetivo de establecer coyunturas y aunar esfuerzos en posibles proyectos a futuro que les lleven a cumplir objetivos en común, a través de programas de tele-educación'",
    image: Arcadinas,
  },
  {
    year: "Julio de 2020",
    title: "Reunión con programa educativo “Arcandinas”",
    description:
      "Apoyo a campaña de prevención por Pandemia de Covid-19, realizada por “Arcandina”",
    image: Prevención,
  },
  {
    year: "Septiembre de 2020",
    title: "Publicación en el Diario",
    description:
      "Publicación en El Diario, medio local, dando a conocer los programas, proyectos y servicios de la Fundación Sociocultural y de Ayuda Mutua Yoyó Zevallos. ",
    image: Diario,
  },
  {
    year: "Septiembre de 2020",
    title: "Reunión con Asociación de Personas con Discapacidad de Portoviejo – ADISPOR",
    description:
      "Con el firme propósito de atender grupos prioritarios, desde la Fundación “Yoyó Zevallos”, se sostuvo una reunión con los miembros del Directorio de la Asociación de Personas con Discapacidad de Portoviejo - ADISPOR, con el objetivo de analizar proyectos de arte y psicoterapia en beneficio de los miembros de la organización. ",
    image: ADISPOR,
  },
  {
    year: "Octubre de 2020",
    title: "Reunión con la Fundación Dr. Oswaldo Loor",
    description:
      "Un paso más en la inclusión. La Fundación Sociocultural y de Ayuda Mutua Yoyó Zevallos y la Fundación Dr. Oswaldo Loor, sostuvieron una reunión para analizar proyectos donde el arte y la psicoterapia se juntan a favor de los chicos atendidos por la organización.",
    image: Fundación,
  },
  {
    year: "Noviembre del 2020",
    title: "Reunión con Luis Andrés Macías, director de Manchecaña",
    description:
      "Miembros de la Fundación Sociocultural Yoyó Zevallos mantuvieron una reunión con Luis Andrés Macías, extraordinario músico manabita, director de Manchecaña, sobre la implementación de proyectos de música y psicoterapia a favor de grupos de atención prioritaria de Manabí.",
    image: Manchecaña,
  },
  {
    year: "Diciembre de 2020",
    description:
      "El 4 de diciembre de 2019, nació oficialmente la Fundación Sociocultural y de Ayuda Mutua “Yoyó Zevallos”. Con diferentes motivaciones, pero con un propósito contundente: brindar beneficios psicoterapéuticos a través del arte, nos juntamos a buscar el camino que mejor nos llevara a lograr nuestros objetivos y hacer posible, con quienes más lo necesitan, el lema de quien ha dado nombre a nuestra organización: “El ser humano vino a este mundo para ser feliz”",
    image: Yoyó,
  },
  {
    year: "Diciembre de 2020",
    title: "Intervenciones de Clowns Hospitalarios ",
    description:
      "El grupo de clowns hospitalarios (1800 Clowns y Fundación Yoyó Zevallos), realizó, este 24 de diciembre, una intervención en la Unidad de Diálisis del Hospital de Especialidades Portoviejo, para compartir alegría y buenas energías en esta fecha de especial significación. Creemos en el arte como herramienta generadora de beneficios psicoterapéuticos.",
    carouselImages: [intervención1, intervención2, intervención3, intervención4, intervención5, intervención6, intervención7, intervención8, intervención9], 
  },
    {
    year: "Abril de 2021",
    title: "Taller de Globoformas ",
    description:
      "La Fundación Yoyó Zevallos y la Unidad Cultura - UTM, apoyaron el ‘’Taller  de Globoformas‘’, a cargo de la Compañía Iguana Ceibo, enfocado en la recuperación psicosocial mediante el arte con la técnica de la globoflexia (manipulación de globos para crear figuras).",
    image: ABRIL20211, 
  },
  {
    year: "Abril de 2021",
    title: "Programa “Espacios Comunitarios de Lectura en Manabí” ",
    description:
      "“El ser humano vino a este mundo para ser feliz”, es la frase que inspiró la vida de quien dio nombre a esta organización, y se ha constituido en un proyecto que encierra varias iniciativas a favor de grupos de atención prioritaria de Manabí. Se puso en marcha en abril de 2021, con la donación de libros para generar un espacio comunitario de lectura para niños, adolescentes, jóvenes y adultos de la Comunidad La Solita del cantón Montecristi. Se realizó en coyuntura con la Unidad de Cultura de la Universidad Técnica de Manabí.  Fotos: Lic. Hernán Baquero, miembro de FYZ, haciendo entrega de libros; Sr. Carlos Eduarte, Presidente de La Solita, recibiendo la donación; y, Lic. Carlos Delgado, de Unidad de Cultura UTM, realizando globoformas para los niños del sitio.",
    carouselImages: [ABRIL20212, ABRIL20213, ABRIL20214], 
  }, 
  {
    year: "Junio de 2021",
    title: " Campaña de Donación de libros para Espacios Comunitarios de Lectura en Manabí ",
    description:
      "Se realizaron jornadas de recolección de libros y material reciclable, como apoyo para la creación de “Espacios comunitarios de lectura en Manabí“, teniendo una gran respuesta de ciudadanos que coinciden con nuestro propósito de democratizar la cultura en sitios que han sido excluidos históricamente de una oferta cultural integral.",
    image: JUNIO20211, 
  }, 
  {
  year: "Junio de 2021",
  title: "Circo Social en comunidades rurales de Manabí",
  description: `El domingo 27 de junio, el elenco de la Compañía Iguana Ceibo, junto a Mauricio Gallegos (Gotera) y Karla Ribadeneira (Pezeta), llevaron un espectáculo lleno de color y alegría a los habitantes de la Comunidad Río Bravo de Montecristi, como una forma de democratizar la cultura en sitios rurales, en aún tiempos de pandemia.
  Fundación Yoyó Zevallos y Compañía Iguana Ceibo, tuvieron el apoyo de la Universidad Técnica de Manabí, a través de su Unidad de Cultura, y de la Casa de la Cultura Ecuatoriana - Núcleo de Manabí.`,
  carouselImages: [circo1, circo2, circo3, circo4, circo5, circo6, circo7, circo8, circo9, circo10, circo11],
}, 
  {
    year: "Julio de 2021",
    title: " Campaña de donación de libros ",
    description:
      "Se continúa con el objetivo de implementar Espacios Comunitarios de Lectura en Manabí, a través de la II Campaña de donación de libros y material reciclable. Se realizó el viernes 16 de julio de 2021, en coyuntura con la Unidad de Cultura de la Universidad Técnica de Manabí. ",
    image: JULIO20211, 
  }, 
  {
    year: "Julio de 2021",
    title: " Metodología de Risoterapia ",
    description:
      "El 27 y 29 de julio, la Fundación Sociocultural y de Ayuda Mutua “Yoyó Zevallos”, a través de uno de sus miembros, el psicólogo clínico Hernán Baquero, dio apoyo técnico al personal del ECU 911, sobre metodología RISOTERAPIA, con el objetivo de reducir los niveles de estrés que manejan en la atención y coordinación de emergencias en la provincia de Manabí.",
    carouselImages: [libro1, libro2], 
  },
  {
    year: "Agosto de 2021",
    title: " Estrechando nexos con Embajada de Chile en Ecuador ",
    description:
      "La Fundación Yoyó Zevallos, estrechó nexos con la Embajada de Chile en Ecuador, a través de una reunión con Francisco Vidaurre Malebrán, Agregador Cultural, con quien definieron colaboraciones mediante proyectos y actividades a realizar en coyuntura.",
    carouselImages: [Agosto1, Agosto2, Agosto3], 
  },
  {
    year: "Septiembre de 2021",
    title: " Taller de Teatroterapia ",
    description:
      "La Fundación Sociocultural `Yoyó Zevallos` y el Gobierno Provincial de Manabí, desarrollaron el Taller de Teatroterapia, que más allá de ofertar una capacitación, se convirtió en una herramienta que brindó importantes beneficios psicoterapéuticos. El proyecto contó con el apoyo de la Universidad Técnica de Manabí, a través de su Unidad de Cultura, y de la Casa de la Cultura Ecuatoriana - Núcleo Manabí. Sin duda alguna, fue un camino que estuvo lleno de descubrimientos y sensibilidades, convirtiéndose en una extraordinaria experiencia de doble vía. En las fotografías: Hernán Baquero Arévalo (Fundación Yoyó Zevallos), Carlos Delgado Briones (instructor de teatro - UTM), y miembros de la Asociación de Personas con Discapacidad de Portoviejo - ADISPOR (participantes del taller). Crédito de las fotografías #2, 3 y 4: Raúl Coyula (Casa de la Cultura Ecuatoriana - Núcleo Manabí)",
    carouselImages: [Teatro1, Teatro2, Teatro3, Teatro4, Teatro5, Teatro6], 
  },
  {
  year: "Septiembre de 2021",
  title: "Taller de Pedagogía y Disciplina de Circo en UTM",
  description:
    "Gracias a la colaboración de la Compañía Artística Iguana Ceibo, y bajo la instrucción de Christian Gerardo Guerra Aguayo, del Colectivo 5 Up, se desarrolló en el gimnasio de la UTM, el Taller de Artes Circenses, mediante la pedagogía y disciplina de circo (acrobacia, equilibrios y trabajo en equipo), mediante la exploración corporal, la creación de nuevas rutinas, y demás destrezas corporales desde las acrobacias. Se capacitaron miembros de la Compañía Artística Iguana Ceibo y estudiantes de la carrera Pedagogía de la Actividad Física, Deporte y Recreación UTM.\n La coyuntura entre la Fundación Yoyó Zevallos, la Compañía Iguana Ceibo y la Universidad Técnica de Manabí, aportó a la consecución de destrezas de los participantes.",
  carouselImages: [pedagogia5,pedagogia, pedagogia2, pedagogia3, pedagogia4],
}
];

const NuestroCamino = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Nuestro Camino</h2>
      <p className="timeline-subtitle">
        Inspirados en la vida y legado de Yoyó Zevallos, creemos que <br />
        <strong>“El ser humano vino a este mundo para ser feliz”.</strong>
      </p>

      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleActive(index)}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{item.year}</h3>
              <h4>{item.title}</h4>
              <p>{item.description}</p>

              {/* Se muestra solo al hacer click */}
              {activeIndex === index && (
                <div className="timeline-extra">
                  {/* Imagen fija si existe */}
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="timeline-image"
                    />
                  )}

                  {/* Carrusel solo si hay imágenes */}
                  {item.carouselImages && (
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      navigation
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 3000 }}
                      loop={true}
                      className="timeline-carousel"
                    >
                      {item.carouselImages.map((img, idx) => (
                        <SwiperSlide key={idx}>
                          <img
                            src={img}
                            alt={`Slide ${idx + 1}`}
                            className="carousel-image"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}

                  {/* Texto extra */}
                  {item.extra && <p className="timeline-extra-text">{item.extra}</p>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="timeline-footer">
        <h2>
          Nuestro camino recién empieza, y queremos recorrerlo junto a ti.
        </h2>
      </div>
    </section>
  );
};

export default NuestroCamino;
