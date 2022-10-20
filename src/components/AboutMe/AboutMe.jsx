import classes from "./AboutMe.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useReducer } from "react";

function AboutMe(props) {
    const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
    const [showDialogIntro, setShowDialogIntro] = useState(false);
    const handleCloseIntro = () => {
        // setUpdatedAbout(about);
        setShowDialogIntro(false);
    };
    // const handleSaveIntro = () => {
    //     setAbout(updatedAbout);
    //     setShowDialogIntro(false);
    // };
    const handleShowIntro = () => setShowDialogIntro(true);

    const [showDialogAbout, setShowDialogAbout] = useState(false);
    const handleCloseAbout = () => {
        // setUpdatedAbout(about);
        setShowDialogAbout(false);
    };
    // const handleSaveAbout = () => {
    //     setAbout(updatedAbout);
    //     setShowDialogAbout(false);
    // };
    const handleShowAbout = () => setShowDialogAbout(true);

    const [about, setAbout] = useState({
        name: props.data.name.toUpperCase(),
        introText: props.data.intro.toUpperCase(),
        introImg: props.data.introImg,
        aboutMeText: props.data.aboutMe.toUpperCase(),
        aboutMeImg: props.data.aboutMeImg,
    });

    // const [updatedAbout, setUpdatedAbout] = useState(about);

    const handleChange = (e) => {
        setAbout((prevAbout) => {
            return {
                ...prevAbout,
                [e.target.name]: e.target.value.toUpperCase(),
            };
        });
    };

    const handleSubmitIntro = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const fileInput = Array.from(form.elements).find(
            ({ name }) => name === "introImg"
        );

        const formData = new FormData();

        for (const file of fileInput.files) {
            formData.append("file", file);
        }

        formData.append("upload_preset", "portfolio-uploads");

        const data = await fetch(
            "https://api.cloudinary.com/v1_1/sarveshp46/image/upload",
            {
                method: "POST",
                body: formData,
            }
        ).then((r) => r.json());

        let newAbout = about;
        newAbout.introImg = data.secure_url;
        setAbout(newAbout);
        forceUpdate();
    };

    const handleSubmitAbout = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const fileInput = Array.from(form.elements).find(
            ({ name }) => name === "aboutMeImg"
        );
        // console.log(fileInput);

        const formData = new FormData();

        for (const file of fileInput.files) {
            formData.append("file", file);
        }

        formData.append("upload_preset", "portfolio-uploads");

        const data = await fetch(
            "https://api.cloudinary.com/v1_1/sarveshp46/image/upload",
            {
                method: "POST",
                body: formData,
            }
        ).then((r) => r.json());
        console.log(data.secure_url);

        let newAbout = about;
        newAbout.aboutMeImg = data.secure_url;
        setAbout(newAbout);
        forceUpdate();
    };
    return (
        <div>
            <section style={{ paddingTop: "2%" }} className={classes.intro}>
                <div className={classes.introText}>
                    <p className="fw-bold">THIS IS ME</p>
                    <p className="fw-bold fs-2">{about.name}</p>
                    <p>{about.introText}</p>
                </div>
                <div className={classes.introImg}>
                    <img
                        src={about.introImg}
                        alt="Profile Image"
                        key={Math.floor(Math.random() * 100)}
                        width={500}
                        height={500}
                    />
                </div>
            </section>
            <section className={classes.aboutMe}>
                <div className={classes.aboutMeImg}>
                    <img
                        src={about.aboutMeImg}
                        alt="Profile Image"
                        width={500}
                        height={500}
                    />
                </div>
                <div className={classes.aboutMeText}>
                    <p className="fw-bold">ABOUT ME</p>
                    <p>{about.aboutMeText}</p>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;
