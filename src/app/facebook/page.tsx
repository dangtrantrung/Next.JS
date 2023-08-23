'use client'
import { useRouter } from "next/navigation"
const Fb = () => {
    const router = useRouter();
    const handleButton = () => {
        //alert('hi me')
        router.push('/')
    }
    return (
        <>FB
            <div>
                <button onClick={() => handleButton()}> Back Home</button>
            </div>
        </>
    )
}
export default Fb