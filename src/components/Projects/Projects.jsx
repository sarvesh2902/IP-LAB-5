import classes from "./Projects.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import githubLogo from "../../images/githubLogo.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { v4 as uuidv4 } from "uuid";

function Projects(props) {
    // const [showDialogEdit, setShowDialogEdit] = useState(false);
    // const handleCloseEdit = () => setShowDialogEdit(false);
    // const handleShowEdit = () => setShowDialogEdit(true);

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

    // const [showDialogAdd, setShowDialogAdd] = useState(false);
    // const handleCloseAdd = () => setShowDialogAdd(false);
    // const handleShowAdd = () => setShowDialogAdd(true);

    const [projects, setProjects] = useState({
        allProjects: props.data.projects,
    });

    const changedProject = projects;

    const handleChange = (e, index) => {
        if (e.target.id === "title") {
            changedProject.allProjects[index].title = e.target.value;
        } else if (e.target.id === "desc") {
            changedProject.allProjects[index].desc = e.target.value;
        } else if (e.target.id === "appLink") {
            changedProject.allProjects[index].appLink = e.target.value;
        } else if (e.target.id === "github") {
            changedProject.allProjects[index].github = e.target.value;
        } else if (e.target.id === "type") {
            changedProject.allProjects[index].type = e.target.value;
        } else if (e.target.id === "img") {
            changedProject.allProjects[index].img = e.target.value;
        }
        setProjects({ allProjects: changedProject.allProjects });
    };

    const handleDelete = (e, index) => {
        const afterDelete = projects.allProjects.filter(function (el) {
            return el._id !== projects.allProjects[index]._id;
        });
        setProjects({ allProjects: afterDelete });
    };

    const newProject = {
        _id: "",
        title: "PORTFOLIO PRO",
        desc: "description",
        appLink: "https://portfolio-sarveshpatil29.vercel.app/",
        github: "https://github.com/SarveshPatil29/portfolio",
        type: "Website",
        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1657120039/sample.jpg",
    };

    const handleClickAdd = () => {
        const addedProjectArray = projects.allProjects;
        newProject._id = uuidv4();
        addedProjectArray.push(newProject);
        setProjects({ allProjects: addedProjectArray });
        console.log(projects.allProjects);
    };

    const projectList = projects.allProjects.map((item, index) => (
        <Card
            key={item._id}
            style={{ width: "18rem" }}
            className={classes.project}
        >
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <div className={classes.titleType}>
                    <Card.Title>{item.title.toUpperCase()}</Card.Title>
                    <p className={classes.type}>{item.type.toUpperCase()}</p>
                </div>
                <Card.Text>{item.desc.toUpperCase()}</Card.Text>
                <div className={classes.links}>
                    <Button href={item.appLink} variant="dark">
                        VIEW APPLICATION
                    </Button>
                    <Link to={item.github}>
                        <img
                            className={classes.githubLogo}
                            width={40}
                            height={40}
                            src={githubLogo}
                            alt="github logo"
                        />
                    </Link>
                </div>
            </Card.Body>
        </Card>
    ));

    return (
        <section>
            <br id="projects" />
            <h1 className={classes.header}>PROJECTS</h1>
            <div className={classes.allProjects}>{projectList}</div>
        </section>
    );
}

export default Projects;
