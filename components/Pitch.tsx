import { useState, useEffect, useRef } from "react";
import styles from '../styles/Pitch.module.scss'
import { Element, Team } from "../types/types";
const Pitch = (props: { 'title': string, elements: Element[], teams: Team[] }) => {
    const [elementsByType, setElementsByType] = useState([] as Element[][]);
    const isNeededSectionPlayer = true;

    useEffect(() => {
        setElementsByType(props.elements ? [
            props.elements.filter((e) => e.element_type_name == "FWD"),
            props.elements.filter((e) => e.element_type_name == "MID"),
            props.elements.filter((e) => e.element_type_name == "DEF"),
            props.elements.filter((e) => e.element_type_name == "GKP"),
        ] : [])
    }, [props.elements])

    const iconStyle = (element: Element) => {
        const filtered_teams = props.teams.filter(t => t.name == element.team_name)
        const background = filtered_teams[0].color[0]
        const borderColor = filtered_teams[0].color[1]
        return {
            'background': background,
            'border-color': borderColor
        }
    }

    return (
        <div className="box">
            <p className="title is-3 has-text-grey-dark">{props.title}</p>
            <div className={styles.pitch}>
                {
                    elementsByType.map((elements, index) => {
                        return <div className="section columns is-centered is-mobile is-gapless" key={index}>
                            {
                                elements.map((e: Element) => {
                                    return <div className="column is-one-fifth" key={e.id}>
                                        <div className="columns is-centered">
                                            <div className={`column is-half ${styles.playerIcon}`} style={iconStyle(e)}>
                                            </div>
                                        </div>
                                        <div
                                            className={`has-text-centered has-text-white-ter ${styles.playerInfo}`}
                                        >
                                            {e.name}
                                        </div>
                                    </div>;
                                })
                            }
                        </div>;
                    })
                }
            </div>
        </div >
    );
}

export default Pitch