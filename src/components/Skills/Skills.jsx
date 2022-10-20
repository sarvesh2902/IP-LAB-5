import classes from "./Skills.module.css";
import { useState, useReducer } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";

function Skills(props) {
    const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
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
    // const handleSaveEdit = () => {
    //     setSkills(updatedSkills);
    //     setShowDialogEdit({
    //         showModal: false,
    //         activeModal: null,
    //     });
    // };
    const handleShowEdit = (e, index) => {
        setShowDialogEdit({
            showModal: true,
            activeModal: index,
        });
    };

    // const [showDialogAdd, setShowDialogAdd] = useState(false);
    // const handleCloseAdd = () => setShowDialogAdd(false);
    // const handleShowAdd = () => setShowDialogAdd(true);

    const [skills, setSkills] = useState({
        allSkills: props.data.skills,
    });

    const changedSkill = skills;

    const handleChange = (e, index) => {
        if (e.target.id === "name") {
            changedSkill.allSkills[index].name = e.target.value;
        } else if (e.target.id === "img") {
            changedSkill.allSkills[index].img = e.target.value;
        }
        setSkills({ allSkills: changedSkill.allSkills });
        console.log(skills);
    };

    const handleDelete = (e, index) => {
        const afterDelete = skills.allSkills.filter(function (el) {
            return el._id !== skills.allSkills[index]._id;
        });
        setSkills({ allSkills: afterDelete });
    };

    const newSkill = {
        _id: "",
        img: "https://res.cloudinary.com/atharva7/image/upload/v1663751031/Portfolio%20website/5651980_kfkusu.jpg",
        name: "REACT",
    };

    const handleClickAdd = () => {
        const addedSkillArray = skills.allSkills;
        newSkill._id = uuidv4();
        addedSkillArray.push(newSkill);
        setSkills({ allSkills: addedSkillArray });
        console.log(skills.allSkills);
    };

    const skillsList = skills.allSkills.map((item, index) => (
        <div key={item._id} className={classes.skill}>
            <div className={classes.skillImg}>
                <img width={60} height={60} src={item.img} alt="react logo" />
            </div>
            <h2>{item.name.toUpperCase()}</h2>
        </div>
    ));

    const changedNewSkill = newSkill;

    const handleChangeAdd = (e) => {
        newSkill.name = e.target.value;
        // setNewSkill(changedNewSkill);
        console.log(newSkill);
    };

    // skills.allSkills.push(newSkill);

    return (
        <section>
            <br id="skills" />
            <h1 className={classes.header}>SKILLS</h1>

            <div className={classes.allSkills}>{skillsList}</div>
        </section>
    );
}

export default Skills;
