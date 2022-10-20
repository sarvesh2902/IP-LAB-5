import Header from "../components/Header/Header";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Achievements from "../components/Achievements/Achievements";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import userProfile from "../data/userProfile.json";
import "bootstrap/dist/css/bootstrap.css";

export default function View() {
    const props = userProfile;
    return (
        <section>
            <Header data={props} isEdit={false} />
            <AboutMe data={props} isEdit={false} />
            <Skills data={props} isEdit={false} />
            <Projects data={props} isEdit={false} />
            <Experience data={props} isEdit={false} />
            <Achievements data={props} isEdit={false} />
            <Contact data={props} isEdit={false} />
            <Footer data={props} isEdit={false} />
        </section>
    );
}
