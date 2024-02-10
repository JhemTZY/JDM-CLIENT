import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"

const Task = ({ task, onDelete, onEdit }) => {
    return (
        <div>
            <div className="task">
                <div>
                    <p className="taskName">
                        <span className="textBold">Fullname:</span> {task.fname}
                    </p>
                    <p className="taskName">
                        <span className="textBold">Nickname:</span> {task.nname}
                    </p>
                    <p className="taskName">
                        <span className="textBold">Age:</span> {task.age}
                    </p>
                    <p className="taskName"><span className="textBold">Position:</span> {task.position}</p>
                </div>
                <div>
                    <p><FaTimes onClick={() => onDelete(task.id)} className="delIcon" /></p>
                    <p><FaPencilAlt onClick={() => onEdit(task.id)} className="editIcon" /></p>
                </div>
            </div>
        </div>
    )
}

export default Task
