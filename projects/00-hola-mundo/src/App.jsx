import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const format = (userName) => `@${userName}`

    const usuario = {initialIsFollowing: true, userName: 'midudev'}

    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Angel',
            isFollowing: true
        },
        {
            userName: 'pheralb',
            name: 'Pablo',
            isFollowing: false
        }
    ]

    return (
        //<> es lo mismo que poner <React.fragment>
        //hace falta para poner un <> u otro elemento para varios componentes si no da error

        // <section className='App'>
        //     <TwitterFollowCard formatUserName={format} isFollowing={true} userName="midudev" name="Miguel Angel" />
        //     <TwitterFollowCard formatUserName={format} isFollowing={false} userName="pheralb" name="Pablo Hernandes" />
        //     <TwitterFollowCard formatUserName={format} isFollowing userName="elonmusk" name="Elon Musk" />
        //     <TwitterFollowCard formatUserName={format} isFollowing userName="elonmusk" name="Elon Musk" />
        // </section>

        // <section className='App'>
        //     <TwitterFollowCard initialIsFollowing userName={"midudev"}>
        //         <strong>Miguel Angel</strong>
        //     </TwitterFollowCard>

        //     <TwitterFollowCard initialIsFollowing={false} userName={"pheralb"}>
        //         <strong>Pablo Hernandes</strong>
        //     </TwitterFollowCard>

        //     <TwitterFollowCard {...usuario}>
        //         <strong>Pablo Hernandes</strong>
        //     </TwitterFollowCard>
        // </section>

        // para mostrar elementos de un arrray
        <section className='App'>
            {
                users.map(({userName, name, isFollowing }) =>(
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>


    )
}