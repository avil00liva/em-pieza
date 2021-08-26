import React from 'react'
import ConsejosAcordTitle from '../components/Consejos/ConsejosAcordTitle/ConsejosAcordTitle'
import ConsejosContent from '../components/Consejos/ConsejosContent'
import ConsejosHero from '../components/Consejos/ConsejosHero/ConsejosHero'
import ConsejosInfo from '../components/Consejos/ConsejosInfo/ConsejosInfo'
import MasConsejos from '../components/Consejos/MasConsejos/MasConsejos'
import {acord1, acord2} from "../components/Consejos/MasConsejos/MasConsejosData"

const Consejos = () => {
    return (
        <>
            <ConsejosHero />
            <ConsejosContent />
            <ConsejosInfo />
            <ConsejosAcordTitle />
            <MasConsejos acord={acord1}/>
            <MasConsejos acord={acord2}/>
        </>
    )
}

export default Consejos
