'use client'
import Link from "next/link"
export default function Header () {
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
                        <Link className="header-button" href="/login">
                            Войти
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}