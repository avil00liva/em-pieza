import {BiSwim, BiDrink} from "react-icons/bi"
import {IoFastFoodSharp} from "react-icons/io5"
import {GiRead ,GiTwirlyFlower} from "react-icons/gi"
import {HiUserGroup} from "react-icons/hi"

export const ListData = [
    {
        id: 1,
        title: "Ejercicio moderado a diario",
        phar: "Es la mejor manera de mantener la salud física, emocional y de prevenir otras enfermedades. Se recomienda hacer algunos ejercicios de fuerza, estiramientos, yoga y tai-chi tambien son muy recomendables.",
        icon: <BiSwim />
    },
    {
        id: 2,
        title: "Evitar el sobrepeso",
        phar: "Seguir una dieta equilibrada y mantenerse activo: aumentar el consumo de frutas y verduras, moderar las porciones de comida, algunas recomendaciones extras, no consumir mucha azúcar y/o sal.",
        icon: <IoFastFoodSharp />,
    },
    {
        id: 3,
        title: "Actividades intelectuales o cognitivas",
        phar: "Mantén la mente ágil, lee, aprendre algun idioma, juega juegos de memoria o asociación.",
        icon: <GiRead />,
    },
    {
        id: 4,
        title: "Reúnete con amigos, participa en actividades",
        phar: "Tener una buena vida social es muy importante a la hora de mantener una salud mental buena.",
        icon: <HiUserGroup />,
    },
    {
        id: 5,
        title: "No fumar, ni beber",
        phar: "El alcohol y el tabaco podrían acelerar los síntomas de la EM.",
        icon: <BiDrink />,
    },
    {
        id: 6,
        title: "Mantente positivo",
        phar: "Algunos dias pueden ser duros, pueden sentirse pesados y sofocantes pero recuerda que eres muchos más fuerte que la enfermedad, mantén la mirada en alto, no estas solo!!.",
        icon: <GiTwirlyFlower />,
    },
]