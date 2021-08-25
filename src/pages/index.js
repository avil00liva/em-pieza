import React from 'react'
import Hero from "../components/Hero"
import Elementos from '../components/Elementos'
import Tips from '../components/Tips'
import NewsCard from '../components/NoticiasCard'
import Aviso from '../components/Aviso/Aviso'

const Home = () => {

    return (
        <>
            <Aviso />
            <Hero />
            <Elementos />
            <NewsCard />
            <Tips />
        </>
    )
}

export default Home
