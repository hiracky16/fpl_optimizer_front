import { useState, useEffect } from "react";
import styles from '../styles/Pitch.module.scss'
const Pitch = (props: { 'title': string }) => {
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

    return (
        <div className="box">
            <p className="title is-3 has-text-grey-dark">{props.title}</p>
            <div className={styles.pitch}>
            </div>
        </div>
    );
}

export default Pitch