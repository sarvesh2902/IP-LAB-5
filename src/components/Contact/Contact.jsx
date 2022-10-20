import classes from "./Contact.module.css";
import githubLogo from "../../images/githubLogo.png";
import instagramLogo from "../../images/instagramLogo.png";
import linkedinLogo from "../../images/linkedinLogo.png";
import facebookLogo from "../../images/facebookLogo.png";
import twitterLogo from "../../images/twitterLogo.png";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export default function Contact(props) {
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

    const [handles, setHandles] = useState({
        allHandles: props.data.handles,
    });

    const changedHandles = handles;

    const handleChange = (e, index) => {
        console.log(handles);
        if (e.target.id === "name") {
            changedHandles.allHandles[index].name = e.target.value;
            if (changedHandles.allHandles[index].name === "github") {
                changedHandles.allHandles[index].img = githubLogo;
            } else if (changedHandles.allHandles[index].name === "instagram") {
                changedHandles.allHandles[index].img = instagramLogo;
            } else if (changedHandles.allHandles[index].name === "linkedin") {
                changedHandles.allHandles[index].img = linkedinLogo;
            } else if (changedHandles.allHandles[index].name === "facebook") {
                changedHandles.allHandles[index].img = facebookLogo;
            } else if (changedHandles.allHandles[index].name === "twitter") {
                changedHandles.allHandles[index].img = twitterLogo;
            }
        } else if (e.target.id === "link") {
            changedHandles.allHandles[index].link = e.target.value;
        }
        setHandles({ allHandles: changedHandles.allHandles });
    };

    const handleDelete = (e, index) => {
        const afterDelete = handles.allHandles.filter(function (el) {
            return el._id !== handles.allHandles[index]._id;
        });
        setHandles({ allHandles: afterDelete });
    };

    const newHandle = {
        _id: "",
        img: "https://res.cloudinary.com/sarveshp46/image/upload/v1664520506/githubLogo_ebjezh.png",
        link: "https://github.com/SarveshPatil29",
        name: "Github",
    };

    const handleClickAdd = () => {
        const addedHandleArray = handles.allHandles;
        newHandle._id = uuidv4();
        addedHandleArray.push(newHandle);
        setHandles({ allHandles: addedHandleArray });
        console.log(handles.allHandles);
    };

    const handlesList = handles.allHandles.map((item, index) => (
        <div key={item._id} className={classes.logo}>
            <button className={classes.handleLogos}>
                <Link to={item.link}>
                    <img
                        width={50}
                        height={50}
                        className={classes.githubLogo}
                        src={item.img}
                        alt={item.name}
                    />
                </Link>
            </button>
        </div>
    ));

    const [inputs, setInputs] = useState({
        fullname: "",
        email: "",
        message: "",
    });

    //   Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    // Validation check method
    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (inputs.fullname.length <= 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }
        if (inputs.email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (inputs.message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };

    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    //   Handling form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            setButtonText("Sending");
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    email: inputs.email,
                    fullname: inputs.fullname,
                    subject: `Message from ${inputs.fullname}`,
                    message: inputs.message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const { error } = await res.json();
            if (error) {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send");
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Send");
        }
        // console.log(fullname, email, subject, message);
    };

    return (
        <section>
            <br id="contact" />
            <h1 id="contact" className={classes.header}>
                CONTACT
            </h1>
            <Form onSubmit={handleSubmit} className={classes.form}>
                <Form.Group className="mb-3">
                    <Form.Control
                        id="fullname"
                        name="fullname"
                        onChange={handleOnChange}
                        required
                        value={inputs.fullname}
                        type="text"
                        placeholder="ENTER YOUR NAME"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        id="email"
                        type="email"
                        name="_replyto"
                        onChange={handleOnChange}
                        required
                        value={inputs.email}
                        placeholder="ENTER YOUR EMAIL"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        id="message"
                        name="message"
                        onChange={handleOnChange}
                        required
                        value={inputs.message}
                        as="textarea"
                        rows="5"
                        placeholder="ENTER YOUR MESSAGE"
                    />
                </Form.Group>
                <div className={classes.submitBtn}>
                    <Button
                        className={classes.btn}
                        variant="dark"
                        type="submit"
                        // disabled={status.submitting}
                    >
                        {buttonText}
                    </Button>
                    {/* <button type="submit" disabled={status.submitting}>
                        {!status.submitting
                            ? !status.submitted
                                ? "Submit"
                                : "Submitted"
                            : "Submitting..."}
                    </button> */}
                </div>
                {showSuccessMessage}
                {showFailureMessage}
            </Form>

            <div className={classes.logoDiv}>
                <section className={classes.logos}>{handlesList}</section>
            </div>
        </section>
    );
}
