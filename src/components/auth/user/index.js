'use client'
import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { authorize, sendVerificationEmail, verifyCode } from '@/app/store/slices/authSlice'
export default function UserLogin () {
    const [step , setStep] = useState(1)
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const [time, setTime] = useState(119)
    const isAuth = useSelector((state) => state.auth.isAuth)
    const dispatch = useDispatch()
    const router = useRouter()

    const sendVerifyEmail = () => {
        dispatch(sendVerificationEmail(email))
        setStep(2)
    }

    const verifyCodeFunc = () => {
        dispatch(verifyCode(email, code))
    }

    useEffect(()=>{
        let timeCurrent = time
        let interval;
        if(step===2){
            let interval = setInterval(() => {
               if(timeCurrent > 0) {
                    setTime(time => time-1)
                    timeCurrent--
                }
            }, 1000)
        }else if(interval){
            clearInterval(interval)
        }
    }, [step])

    useEffect(() => {
        if(isAuth) router.push("/resumes")

    }, [isAuth])

    const min = parseInt(time/60)
    const sec = time % 60

    return (
        <section className="login-page">
            {isAuth ? "True" : "False"}
            { step == 1 && <div className="card">
                <h1>Поиск работы</h1>
                <form>
                    <input className="input"  placeholder="Введите email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button className="button button-primary" onClick={sendVerifyEmail}>Продолжить</button>
                </form>
            </div>}

            { step == 1 && <div className="card">
                <h1>Поиск сотрудников</h1>
                <p>Размещение ваканский </p>
                <Link href="/employer/signin" className="button button-primary-bordered">Я ищу сотрудника</Link>
            </div>}

            { step == 2 && <div className="card">
                <h1>Отправили код на ...</h1>
                <p>Напишите его, чтобы подтвердить что это вы, а не кто-то другой</p>
                <form>
                    <input className="input"  placeholder="Введите код" value={code} onChange={(e) => setCode(e.target.value)}/>
                    <p>Повторить можно через {min}:{sec}</p>
                    <button className="button button-primary" onClick={verifyCodeFunc} type="button">Продолжить</button>
                    <button className="button button-primary-bordered"onClick={()=>setStep(1)}>Назад</button>
                </form>
            </div>}
        </section>
    )
}