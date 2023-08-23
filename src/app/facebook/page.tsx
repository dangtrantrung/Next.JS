'use client'
import { useRouter } from "next/navigation"
import { Button } from "react-bootstrap";
const Fb = () => {
    const router = useRouter();
    const handleButton = () => {
        //alert('hi me')
        router.push('/')
    }
    return (
        <div>
            <div> <span> FB </span></div>
            <div> <Button variant="primary">Hoi dan IT</Button></div>
            <div>
                <button onClick={() => handleButton()}> Back Home</button>
            </div>
        </div >
    )
}
export default Fb