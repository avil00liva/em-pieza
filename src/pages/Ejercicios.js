import React from 'react'
import EjerciciosContainer from '../components/Ejercicios/EjerciciosContainer'
import EjerciciosEnd from '../components/EjerciciosEnd/EjerciciosEnd'
import EjerciciosHero from '../components/EjerciciosHero/EjerciciosHero'

const Ejercicios = () => {
    return (
        <div style={{marginTop: "5rem"}}>
            <EjerciciosHero />
            <EjerciciosContainer />
            <EjerciciosEnd />
        </div>
    )
}

export default Ejercicios
