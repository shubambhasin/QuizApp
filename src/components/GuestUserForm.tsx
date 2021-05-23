import { useNavigate } from "react-router"
import { useModal } from "../context/ModalContext"
import { useUser } from "../context/UserContext"

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

        setModal(false)
        navigate('/home')

    }

    return (
        <div className="guestUserModal">
            <form onSubmit={() => handleSubmit}>
                <button className="btn btn-red btn-sm close-btn"
                    onClick={() => setModal(false)}
                >x</button>
                <label>Enter your name</label>
                <input className="input input-green"
                    type="text"
                    name="name"
                    required
                    value={guestUser.username}
                    onChange={handleGuestUser} />

                <button className="btn btn-green mt1-rem"
                    onClick={handleSubmit}>Enter the game</button>
            </form>
        </div>
    )
}