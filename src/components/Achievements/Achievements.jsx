import classes from "./Achievements.module.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { v4 as uuidv4 } from "uuid";

export default function Achievements(props) {
    // const [showDialogEdit, setShowDialogEdit] = useState(false);
    // const handleCloseEdit = () => setShowDialogEdit(false);
    // const handleShowEdit = () => setShowDialogEdit(true);

    // const [showDialogAdd, setShowDialogAdd] = useState(false);
    // const handleCloseAdd = () => setShowDialogAdd(false);
    // const handleShowAdd = () => setShowDialogAdd(true);

    const [showDialogEdit, setShowDialogEdit] = useState({
        showModal: false,
        activeModal: null,
    });

    const handleCloseEdit = () => {
        // setUpdatedSkills(skills);
        setShowDialogEdit({
            showModal: false,
            activeModal: null,
        });
    };

    const handleShowEdit = (e, index) => {
        setShowDialogEdit({
            showModal: true,
            activeModal: index,
        });
    };

    const [ach, setAch] = useState({
        allAch: props.data.ach,
    });

    const changedAch = ach;

    const handleChange = (e, index) => {
        if (e.target.id === "name") {
            changedAch.allAch[index].name = e.target.value;
        } else if (e.target.id === "position") {
            changedAch.allAch[index].position = e.target.value;
        }
        setAch({ allAch: changedAch.allAch });
    };

    const handleDelete = (e, index) => {
        const afterDelete = ach.allAch.filter(function (el) {
            return el._id !== ach.allAch[index]._id;
        });
        setAch({ allAch: afterDelete });
    };

    const newAch = {
        _id: "",
        name: "CODE-O-FIESTA",
        position: "2nd",
    };

    const handleClickAdd = () => {
        const addedAchArray = ach.allAch;
        newAch._id = uuidv4();
        addedAchArray.push(newAch);
        setAch({ allAch: addedAchArray });
        console.log(ach.allAch);
    };

    const achList = ach.allAch.map((item, index) => (
        <Card key={item._id} style={{ width: "36rem" }} className={classes.ach}>
            <Card.Body>
                <Card.Title>{item.name.toUpperCase()}</Card.Title>
                <Card.Text className={classes.position}>
                    {item.position.toUpperCase()}
                </Card.Text>
            </Card.Body>
        </Card>
    ));

    return (
        <section>
            <br id="achievements" />
            <h1 className={classes.header}>ACHIEVEMENTS</h1>
            <div className={classes.allAch}>{achList}</div>
        </section>
    );
}
