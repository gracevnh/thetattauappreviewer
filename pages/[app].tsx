import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import styles from "../styles/Home.module.css";
import { useTheme } from "next-themes";
import Head from 'next/head';
import Select from 'react-select';
import Notes from '../components/notes';
import AppNavigation from '../components/app-navigation';
import { useEffect } from 'react';
import ApplicantInfo from '../components/applicant-info';
import QuestionList from '../components/question-list';
import JumpToApp from '../components/jump-to-app';
import AppHeader from '../components/header';
import ThemeSelector from '../components/theme-selector';

export interface ApplicationData {
    Timestamp: string;
    "First Name": string;
    "Last Name": string;
    Pronouns: string;
    "USC Email Address": string;
    "Phone Number (XXX) XXX-XXXX": string;
    "Birth Date": string;
    'Class Standing': string;
    "Hometown!": string;
    "Declared Major": string;
    "Do you have a second major?": string;
    "What is your second major?": string;
    "Do you have a minor?": string;
    "What is your minor(s)?": string;
    "What is your cumulative GPA?": string;
    "How did you hear about Theta Tau?": string;
    "Did you contract COVID-19 during the recruitment process (to ensure all candidates are given a fair evaluation and invite eligible candidates to a virtual event)?": string;
    "Which rush events did you attend (or which will you attend)?": string;
    "Please upload your resume. Label the file \"Last-name First-name Resume\".": string;
    "Please upload a recent headshot. Label the file \"Last-name First-name Headshot\". PLEASE USE A JPEG/JPG": string;
    "Why do you want to join Theta Tau? Which of the three pillars (Service, Professionalism, or Social) resonates most with you? (250 Words)": string;
    "The three pillars of Theta Tau are Service, Professionalism, and Social. If you could plan one event for the organization related to one (or more) of these principles, what would it be? Briefly describe your event. (200 Words)": string;
    "What THREE books/movies/TV shows describe you most accurately (without explaining why they describe you).": string;
    "What fictional character do you feel best represents you AND why? (100 Words)": string;
    "You wake up one day in a ghost town with no idea how you got there. You recognize the area as being somewhere in Montana from a game of GeoGuessr you played and realize that the closest human being is 150 miles away. Unfortunately, your pockets have been emptied and all you have is a can of spray paint. You luckily stumble upon a backpack that has a single strike-anywhere match, a potato, a thermos, an old school video camera, a tennis ball, tweezers, an apple, a swiss army knife, two pieces of scrap wood, a mirror, and a blank canvas. You know that a train is going to pass through this town in 10 days, which means you must keep yourself alive and entertained for that amount of time. Describe which materials you would use to survive this situation. Feel free to use natural resources to help with your creations (250 Words).": string;
    "Optional: Upload a photo of your creation if you feel words can't do it justice.": string;
    id: number; // added in getAndParseApps
}

type Props = {
    data: string
    totalApps: number
    currApp: number
    namesAndIds: {
        name: string
        id: number
    }[]
}

const Application = ({ data, totalApps, namesAndIds }: Props) => {
    const app = JSON.parse(data) as ApplicationData
    const { theme, setTheme } = useTheme();
    const currApp = app.id

    return (
        <div className={styles.container}>
            <Head>
                <title>
                    Super Secret App Reviewer 2 - The Second Super Secret App Review
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <span className={styles["grid-container"]}>
                    <div className={styles.header}>
                        <ThemeSelector setTheme={setTheme} theme={theme} />
                        <h1 style={{ display: "inline-block", marginRight: 110 }}>
                            Theta Tau App Review
                        </h1>
                        <JumpToApp currApp={currApp} namesAndIds={namesAndIds} />
                    </div>
                    <Notes namesAndIds={namesAndIds} currApp={currApp} />
                    <main className={styles.app}>
                        <AppNavigation totalApps={totalApps} currApp={currApp} />
                        <AppHeader currApp={currApp} name={`${app['First Name']} ${app['Last Name']}`} totalApps={totalApps} />
                        <h3>Info</h3>
                        <ApplicantInfo app={app} />
                        <QuestionList app={app} />
                        <AppNavigation currApp={currApp} totalApps={totalApps} />
                    </main>
                </span>
            </main>
        </div>)
}

const getAndParseApps = () => {
    const apps = require("../data/apps.json") as any[];

    let parsedApps: ApplicationData[] = []
    Object.entries(apps).forEach(([key, value]) => {
        // If we successfully parse, we assume its a valid app.
        const num = parseInt(key);
        const app = Object.assign({}, value, { id: num });
        if (!isNaN(num)) parsedApps.push(app);
    });

    return parsedApps;
}

export async function getStaticProps(context: GetStaticPropsContext) {
    if (process.env.ACTIVE !== "true") {
        return { props: { data: JSON.stringify({}) } };
    }

    const { app: appId } = context.params
    const parsedApps = getAndParseApps()
    const appData = parsedApps.find(app => app.id.toString() === appId.toString())
    const namesAndIds = parsedApps.map(app => ({
        name: `${app["First Name"]} ${app["Last Name"]}`,
        id: app.id
    }))

    return {
        props: { data: JSON.stringify(appData), totalApps: parsedApps.length, namesAndIds },
    };
}

export async function getStaticPaths() {
    const apps = getAndParseApps()
    const paths = apps.map((app) => {
        return { params: { app: app.id.toString() } }
    })

    return {
        paths,
        fallback: false // false or 'blocking'
    };
}


export default Application
