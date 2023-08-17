'use client'
// import logo from '../../app/images/logo.png'
// import searchIcon from '../../app/images/search.png'
// import Image from 'next/image'
export default function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div>
                        <img src="/images/logo.png"/>
                        <a>Работодателям</a>
                        <a>Помощь</a>
                    </div>
                    <div>
                        <button className="header-search">
                            <img src="/images/search.png"/>
                            Поиск
                        </button>
                        <button className="header-button header-button--green">
                            Создать резюме
                        </button>
                        <button className="header-button">
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}