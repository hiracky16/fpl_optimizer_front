import { useState, useEffect, useRef } from "react";
import styles from '../styles/Pitch.module.scss'
import { Element } from "../types/types";
const Pitch = (props: { 'title': string, elements: Element[] }) => {
    // REF: https://teamcolorcodes.com/aston-villa-fc-color-codes/
    const TEAM_COLOR_MAP: { [key in number]: string[] } = {
        // Arsenal
        1: ["#EF0107", "#063672"],
        // Aston Villa
        2: ["#95BFE5", "#670E36"],
        // Brentford: https://encycolorpedia.com/teams/football/efl-championship/brentford-f-c
        3: ["#e30613", "#140e0c"],
        // Brighton
        4: ["#0057B8", "#FFCD00"],
        // Burnley
        5: ["#6C1D45", "#99D6EA"],
        // Chelsea
        6: ["#034694", "#FFFFFF"],
        // Crystal Palace
        7: ["#1B458F", "#C4122E"],
        // Everton
        8: ["#003399", "#FFFFFF"],
        // Leicester
        9: ["#003090", "#FDBE11"],
        // Leeds
        10: ["#FFFFFF", "#FFCD00"],
        // Liverpool
        11: ["#C8102E", "#00B2A9"],
        // Man City
        12: ["#6CABDD", "#FFFFFF"],
        // Man Utd
        13: ["#DA291C", "#FBE122"],
        // Newcastle
        14: ["#241F20", "#FFFFFF"],
        // Norwich
        15: ["#FFF200", "#00A650"],
        // Southampton
        16: ["#D71920", "#130C0E"],
        // Spurs
        17: ["#FFFFFF", "#132257"],
        // Watford
        18: ["#FBEE23", "#ED2127"],
        // West Ham
        19: ["#7A263A", "#1BB1E7"],
        // Wolves
        20: ["#FDB913", "#231F20"],
    };
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
                                            <div className={`column is-half ${styles.playerIcon}`}>
                                            </div>
                                        </div>
                                        <div className={`has-text-centered has-text-white-ter ${styles.playerInfo}`}>
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