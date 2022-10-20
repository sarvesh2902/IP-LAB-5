import classes from "./Experience.module.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { v4 as uuidv4 } from "uuid";

function Experience(props) {
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

    const [exp, setExp] = useState({
        allExp: props.data.exp,
    });

    const changedExp = exp;

    const handleChange = (e, index) => {
        if (e.target.id === "jobTitle") {
            changedExp.allExp[index].jobTitle = e.target.value;
        } else if (e.target.id === "company") {
            changedExp.allExp[index].company = e.target.value;
        } else if (e.target.id === "timePeriod") {
            changedExp.allExp[index].timePeriod = e.target.value;
        } else if (e.target.id === "location") {
            changedExp.allExp[index].location = e.target.value;
        } else if (e.target.id === "desc") {
            changedExp.allExp[index].desc = e.target.value;
        }
        setExp({ allExp: changedExp.allExp });
    };

    const handleDelete = (e, index) => {
        const afterDelete = exp.allExp.filter(function (el) {
            return el._id !== exp.allExp[index]._id;
        });
        setExp({ allExp: afterDelete });
    };

    const newExp = {
        _id: "",
        jobTitle: "WEB DEVELOPER INTERN",
        company: "Google",
        timePeriod: "Dec 2021 - Jan 2023",
        location: "Mumbai",
        desc: "description",
    };

    const handleClickAdd = () => {
        const addedExpArray = exp.allExp;
        newExp._id = uuidv4();
        addedExpArray.push(newExp);
        setExp({ allExp: addedExpArray });
        console.log(exp.allExp);
    };

    const expList = exp.allExp.map((item, index) => (
        <Card key={item._id} style={{ width: "36rem" }} className={classes.exp}>
            <Card.Body>
                <div className={classes.titleLoc}>
                    <Card.Title>{item.jobTitle.toUpperCase()}</Card.Title>
                    <Card.Text className={classes.loc}>
                        {item.location.toUpperCase()}
                    </Card.Text>
                </div>
                <Card.Text className={classes.company}>
                    {item.company.toUpperCase()}
                </Card.Text>
                <Card.Text className={classes.timePeriod}>
                    {item.timePeriod.toUpperCase()}
                </Card.Text>
                <Card.Text className={classes.desc}>
                    {item.desc.toUpperCase()}
                </Card.Text>
            </Card.Body>
        </Card>
    ));

    return (
        <section>
            <br id="experience" />
            <h1 className={classes.header}>EXPERIENCE</h1>
            <div className={classes.allExp}>{expList}</div>
        </section>
    );
}

export default Experience;
