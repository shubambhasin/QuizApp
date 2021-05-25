import { useNavigate } from "react-router"
import { useModal } from "../context/ModalContext"
import { useUser } from "../context/UserContext"

import { IoClose } from "react-icons/io5";
export const GuestUserForm = () => {

    const { setModal } = useModal()

    const { guestUser, setGuestUser } = useUser()
    const navigate = useNavigate()
    const handleGuestUser = (e: any) => {

        setGuestUser({
            ...guestUser,
            username: e.target.value
        })
        console.log(guestUser)
    }
    const handleSubmit = (e: any) => {

        e.preventDefault()

        if(guestUser.username !== "")
        {
            
        setModal(false)
        navigate('/home')


        }

    }

    return (
        <div className="guestUserModal">
            <form onSubmit={() => handleSubmit}>
                <button className="btn close-btn"
                ><IoClose style={{color: "white"}}  onClick={() => setModal(false)}/></button>
                   
                <label className="mtb1-rem">Enter your name</label>
                <div className="flex flex-col">
                <input className="input input-green"
                    type="text"
                    name="name"
                    required
                    placeholder="Enter..."
                    value={guestUser.username}
                    onChange={handleGuestUser} />
                    <small className="xsm">*We need this for registering your name</small>
                </div>

                <button className="btn-enter-quiz mt1-rem"
                    onClick={handleSubmit}>Enter the game</button>
            </form>
        </div>
    )
}