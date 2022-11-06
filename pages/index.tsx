import type { NextPage } from 'next'
import Head from 'next/head'
import Pitch from '../components/Pitch'
import styles from '../styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import OptimizeForm from '../components/OptimizeForm'
import { useEffect, useState } from 'react'
import { Element, Team } from '../types/types'

const Home: NextPage = () => {
    const [elements, setElements] = useState([] as Element[]);
    const [teams, setTeams] = useState([] as Team[]);
    const [event, setEvent] = useState(1 as number);
    const updateElement = () => {
        fetch(`http://localhost:3000/api/optimize?team=2555500&event=${event}`)
            .then(data => data.json())
            .then(r => setElements(r.current))
    }
    useEffect(() => updateElement(), [])
    useEffect(() => {
        fetch('http://localhost:3000/api/teams')
            .then(data => data.json())
            .then(data => setTeams(data.teams))
    }, [])

    return (
        <div className='container'>
            <section className="section">
                <div className="title is-2 has-text-grey-dark">
                    <FontAwesomeIcon icon={faMicrochip}></FontAwesomeIcon>
                    メンバー最適化
                </div>
            </section>
            <section className='section'>
                <OptimizeForm event={event} setEvent={setEvent} submit={updateElement} />
            </section>
            <section className='section'>
                <Pitch title="イレブン" elements={elements}></Pitch>
            </section>
        </div>
    )
}

export default Home
