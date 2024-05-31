import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
    const { data: session, status } = useSession()
    if (status === "loading") {
        return <p>Loading...</p>
    }

    if (session) {
        console.log(session)
        return (
            <>
                Signed in as {session.user.email} <br />
                <img src={session.user.image} alt={session.user.name} />
                <br />
                <p>{session.user.name}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}
