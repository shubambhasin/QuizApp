import { useModal } from "../context/ModalContext"
import { useUser } from "../context/UserContext"

export const GuestUserForm = () => {

    const { setModal} = useModal()

    const { guestUser, setGuestUser } = useUser()
    const handleGuestUser = (e: any) => {

        setGuestUser({
            ...guestUser,
            username: e.target.value
        })
        console.log(guestUser)
    }
    return (
        <div className="guestUserModal">
            <form>
            <button className="btn btn-red btn-sm" onClick={() => setModal(false)}>x</button>
                <label>Enter your name</label>
                <input className="input input-green"
                    type="text"
                    name="name"
                    value={guestUser.username}
                    onChange={handleGuestUser} />

            </form>
        </div>
    )
}