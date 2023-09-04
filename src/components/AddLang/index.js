import { useState, useEffect } from "react"

export default function AddLang ({onChange}) {
    const [foreignLanguages, setForeignLanguages] = useState([])

    const lns = foreignLanguages.map((ln, index) => {
        <div className="selectdate selectdate-noday">
            <select placeholder="Месяц" className="input" type="text">
                <option disabled>Выберите месяц</option>
                <option value={0}>январь</option>
                <option value={1}>февраль</option>
                <option value={2}>март</option>
                <option value={3}>апрель</option>
                <option value={4}>май</option>
                <option value={5}>июнь</option>
                <option value={6}>июль</option>
                <option value={7}>август</option>
                <option value={8}>сентябрь</option>
                <option value={9}>октябрь</option>
                <option value={10}>ноябрь</option>
                <option value={11}>декабрь</option>
            </select>
            <input className="input" placeholder="Год" type="text"/>
        </div>
    })

   return (
            <div className="eds">
                {lns}
                <a onClick={() =>  setForeignLanguages([...foreignLanguages, {name: "", level: ""}])}>Добавить язык</a>
            </div>
    )

}