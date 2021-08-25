import React from 'react'
import ConsejosContent from '../components/Consejos/ConsejosContent'
import ConsejosHero from '../components/Consejos/ConsejosHero/ConsejosHero'
import ConsejosInfo from '../components/Consejos/ConsejosInfo/ConsejosInfo'
import MasConsejos from '../components/Consejos/MasConsejos/MasConsejos'

const Consejos = () => {
    return (
        <>
            <ConsejosHero />
            <ConsejosContent />
            <ConsejosInfo />
            <MasConsejos />
        </>
    )
}

export default Consejos
