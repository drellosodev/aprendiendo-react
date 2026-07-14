import { useState } from "react"
// export function TwitterFollowCard({formatUserName, userName, name, isFollowing}){

//     return (
//         <article className='tw-followCard'>
//             <header className='tw-followCard-header'>
//                 <img
//                     className='tw-followCard-avatar' 
//                     alt="avatar" 
//                     src={`https://unavatar.io/${userName}`}/>
//                 <div className='tw-followCard-info'>
//                     <strong className='tw-followCard-info'>{name}</strong>
//                     <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
//                 </div>
//             </header>

//             <aside>
//                 <button className='tw-followCard-button'>
//                     Seguir
//                 </button>
//             </aside>
//         </article>
//     )
// }

export function TwitterFollowCard({ children, userName, initialIsFollowing }){

    //primera posicion es el estado, segunda posicion a lo que se le cambia el estado
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            { /* PARA PONER COMENTARIOS DENTRO SE HACE ASI*/}
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar' 
                    alt="avatar" 
                    src={`https://unavatar.io/${userName}`}/>
                <div className='tw-followCard-info'>
                    {children}
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}