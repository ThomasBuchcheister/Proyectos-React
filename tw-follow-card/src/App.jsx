import { TwitterFollowCard } from "./TwitterFollowCard";

export function App () {
    

    return(
        <>
            <TwitterFollowCard 
            userName="midudev" 
            name="Miguel Angel Duran"
            initialIsFollowing
            / >
            <TwitterFollowCard 
            userName="elonmusk" 
            name="Elon Musk"
            
            / >
            <TwitterFollowCard 
            userName="_Buchcheister" 
            name="Thomas Buchcheister"
            
            / >
        </>
    )
}