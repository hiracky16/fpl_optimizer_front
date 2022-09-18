import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from '../styles/InitForm.module.scss'

const Form = () => {
    const [budget, setBudget] = useState(80);
    const [teams, setTeams] = useState([] as { id: number, name: string }[]);
    useEffect(() => {
        // TODO: fix
        fetch("http://localhost:3000/api/teams")
            .then(data => data.json())
            .then(r => setTeams(r.teams))
    }, [])
    const [favoriteTeamId, setFavoriteTeamId] = useState(1)
    const [excludedTeamId, setExcludedTeamId] = useState(1)
    const onDefaultChange = (event: any, setter: Dispatch<SetStateAction<number>>) => {
        const newbudget = (event.target as HTMLInputElement).value
        setter(parseInt(newbudget))
    }
    return (
        <div className="box">
            <div className="title is-3 has-text-grey-dark">
                条件
            </div>
            <div className={`tile is-parent ${styles.formContent}`}>
                <div className="tile is-child">予算: £ {budget} m</div>
                <div className="tile is-child">
                    <input
                        className={`slider ${styles.budgetSlider}`}
                        step="5"
                        min="0"
                        max="100"
                        value={budget}
                        type="range"
                        onChange={(event) => onDefaultChange(event, setBudget)}
                    />
                </div>
            </div>
            <div className={`tile is-parent ${styles.formContent}`}>
                <div className="tile is-child">
                    好きなチーム（選択したら必ず 1 人はいります）
                </div>
                <div className="tile is-child">
                    <div className="select">
                        <select value={favoriteTeamId} onChange={(event) => onDefaultChange(event, setFavoriteTeamId)}>
                            {
                                teams.map((team) => {
                                    return <option key={team.id} value={team.id}>{team.name}</option>;
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className={`tile is-parent ${styles.formContent}`}>
                <div className="tile is-child">
                    除外チーム
                </div>
                <div className="tile is-child">
                    <div className="select">
                        <select value={excludedTeamId} onChange={(event) => onDefaultChange(event, setExcludedTeamId)}>
                            {
                                teams.map((team) => {
                                    return <option key={team.id} value={team.id}>{team.name}</option>;
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className={`${styles.formContent}`}>
                <button className="button">最適化！</button>
            </div>
        </div>
    );
}

export default Form