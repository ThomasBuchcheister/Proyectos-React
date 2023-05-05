import './Styles/TwitterFollowCard.css'
import { useState } from 'react'



export function TwitterFollowCard ({userName, name, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName= isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }


    return(
        <article className='tw-followCard'>
            <header className='tw-follow-header'>
                <img className='tw-avatar' alt="El avatar 1" src={`https://unavatar.io/${userName}`}></img>
                <div className='tw-info'>
                    <strong className='tw-userName'>{name}</strong>
                    <span className='tw-userData'>@{userName}</span>
                </div>
            </header> 

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-followingText'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>    
                </button>
            </aside>
        </article>
    )
}