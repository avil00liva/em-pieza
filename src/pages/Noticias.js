import React from 'react'
import NoticiasContent from '../components/Noticias/NoticiasContent'
import NoticiasHero from '../components/NoticiasHero/NoticiasHero'
import NoticiasProx from '../components/NoticiasProx/NoticiasProx'


const Noticias = () => {
    return (
        <div style={{marginTop: "5rem"}}>
            <NoticiasHero />
            <NoticiasContent />
            <NoticiasProx />
        </div>
    )
}

export default Noticias
