'use client'
import { useSelector, useDispatch } from 'react-redux'
import Link from "next/link"
import { logOut } from '@/app/store/slices/authSlice'
export default function Header () {

    const dispatch = useDispatch()

    const isAuth = useSelector((state) => state.auth.isAuth)

    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div>
                        <Link href="/">
                            <img src="/images/logo.png"/>
                        </Link>
                        <Link href="/resumes">Мои резюме</Link>
                        <a>Помощь</a>
                    </div>
                    <div>
                        <button className="header-search">
                            <img src="/images/search.png"/>
                            Поиск
                        </button>
                        <Link className="header-button header-button--green" href="/create-resume">
                            Создать резюме
                        </Link>
                        { !isAuth && <Link className="header-button" href="/login">
                            Войти
                        </Link>}
                        { isAuth && <a className="header-button" onClick={() => dispatch(logOut())}>
                            Выйти
                        </a>}
                    </div>
                </div>
            </div>
        </header>
    )
}