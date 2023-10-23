'use client'
import { useSelector, useDispatch } from 'react-redux'
import Link from "next/link"
import { logOut, authorize } from '@/app/store/slices/authSlice'
import { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/navigation'
export default function Header () {

    const dispatch = useDispatch()
    const router = useRouter()

    const isAuth = useSelector((state) => state.auth.isAuth)
    const currentUser = useSelector((state) => state.auth.currentUser)

    useEffect(() => {
        
        const token = localStorage.getItem("token")

        if(token) {
            let decodedToken = jwt_decode(token)
            if(decodedToken.exp * 1000 > Date.now()) {
               dispatch(authorize({token}))
            } else {
                    localStorage.removeItem("token")
                }
        }
    }, [])

    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div>
                        <Link href="/">
                            <img src="/images/logo.png" alt="icon"/>
                        </Link>
                        {currentUser && currentUser.role && currentUser.role.name === 'manager' && <Link href="/vacancy">Мои вакансии</Link>}
                        {currentUser && currentUser.role && currentUser.role.name !== 'manager' && <Link href="/resumes">Мои резюме</Link>}
                        {currentUser && currentUser.role && currentUser.role.name !== 'manager' && <Link href="/applies"> Отклики </Link>}
                        <a>Помощь</a>
                    </div>
                    <div>
                        <Link className="header-search" href="/search/vacancy/advanced">
                            <img src="/images/search.png" alt="icon"/>
                            Поиск
                        </Link>
                        {currentUser && currentUser.role && currentUser.role.name === 'manager' && <Link className="header-button header-button--green" href="/create-vacancy"> Создать вакансию </Link>}
                        {currentUser && currentUser.role && currentUser.role.name !== 'manager' && <Link className="header-button header-button--green" href="/create-resume"> Создать резюме </Link>}

                        { !isAuth && <Link className="header-button" href="/login">
                            Войти
                        </Link>}
                        { isAuth && <a className="header-button" onClick={() => dispatch(logOut(router))}>
                            Выйти
                        </a>}
                    </div>
                </div>
            </div>
        </header>
    )
}