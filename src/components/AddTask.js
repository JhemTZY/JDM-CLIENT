import { useState } from 'react';
import Swal from "sweetalert2";

const AddTask = ({ onSave }) => {
    const [fname, setFirstname] = useState('');
    const [nname, setNickname] = useState('');
    const [age, setAge] = useState('');
    const [position, setPosition] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!fname && !nname && !age && !position) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your Firstname , Lastname , Age and Position!'
            })
        } else if (!fname && nname && age && position) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your Firstname!'
            })
        } else if (fname && !nname && age && position) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your Nickname!'
            })
        } else if (fname && nname && !age && position) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your Age!'
            })
        } else if (fname && nname && age && !position) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your Position!'
            })

        } else {
            onSave({ fname, nname , age , position });
        }

        setFirstname('');
        setNickname('');
        setAge('');
        setPosition('');

    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Firstname</label>
                <input type="text" placeholder="Firstname" value={fname} onChange={(e) => setFirstname(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Nickname</label>
                <input type="text" placeholder="Nickname" value={nname} onChange={(e) => setNickname(e.target.value)} />
            </div>            <div className="form-control">
                <label>Age</label>
                <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Position</label>
                <input type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} />
            </div>

            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
    )
}

export default AddTask
