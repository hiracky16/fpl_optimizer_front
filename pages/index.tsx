import type { NextPage } from 'next'
import Head from 'next/head'
import Pitch from '../components/Pitch'
import styles from '../styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import InitForm from '../components/InitForm'

const Home: NextPage = () => {
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
                <Pitch title="イレブン"></Pitch>
            </section>
        </div>
    )
}

export default Home
