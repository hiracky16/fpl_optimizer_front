import type { NextPage } from 'next'
import Head from 'next/head'
import Pitch from '../components/Pitch'
import styles from '../styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import InitForm from '../components/InitForm'
import { useEffect, useState } from 'react'
import { Element } from '../types/types'

const Home: NextPage = () => {
    const [elements, setElements] = useState([] as Element[]);
    useEffect(() => {
        fetch("http://localhost:3000/api/init_optimize")
            .then(data => data.json())
            .then(r => setElements(r.elements))
    }, [])

    return (
        <div className='container'>
            <section className="section">
                <div className="title is-2 has-text-grey-dark">
                    {/* <font-awesome-icon icon="microchip" /> */}
                    <FontAwesomeIcon icon={faMicrochip}></FontAwesomeIcon>
                    初期メンバー最適化
                </div>
            </section>
            <section className='section'>
                <InitForm />
            </section>
            <section className='section'>
                <Pitch title="イレブン" elements={elements}></Pitch>
            </section>
        </div>
    )
}

export default Home
