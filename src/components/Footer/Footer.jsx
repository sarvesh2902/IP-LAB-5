import classes from "./Footer.module.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Footer(props) {
    const allHandles = props.data.handles;
    const handlesList = allHandles.map((item) => (
        <Card.Link key={item._id} className={classes.link} href="/view">
            {item.name.toUpperCase()}
        </Card.Link>
    ));
    return (
        <section className={classes.footer}>
            <div className={classes.subFooter}>
                {/* <Card className={classes.links}>
                    <Card.Body>
                        <Card.Title className={classes.title}>
                            QUICK LINKS
                        </Card.Title>
                        <nav className={classes.nav}>
                            <Card.Link className={classes.link} href="/view">
                                HOME
                            </Card.Link>
                            <Card.Link className={classes.link} href="/view">
                                SKILLS
                            </Card.Link>
                            <Card.Link className={classes.link} href="/view">
                                PROJECT
                            </Card.Link>
                            <Card.Link className={classes.link} href="/view">
                                EXPERIENCE
                            </Card.Link>
                            <Card.Link className={classes.link} href="/view">
                                ACHIEVEMENTS
                            </Card.Link>
                            <Card.Link className={classes.link} href="/view">
                                CONTACT
                            </Card.Link>
                        </nav>
                    </Card.Body>
                </Card>
                <Card className={classes.links}>
                    <Card.Body>
                        <Card.Title className={classes.title}>
                            SOCIAL
                        </Card.Title>
                        <nav className={classes.nav}>{handlesList}</nav>
                    </Card.Body>
                </Card> */}
            </div>
            <div className={classes.copyright}>
                <p>
                    <Link href="/dashboard">
                        <a className={classes.homeLink}>PORTFOLIO PRO</a>
                    </Link>
                </p>
                <p>@2022 SARVESH CREATIONS ALL RIGHTS RESERVED</p>
                <p>BUILT USING NEXTJS</p>
            </div>
        </section>
    );
}
