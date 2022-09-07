import Image from 'next/image'
import { ApplicationData } from '../../pages/[app]'
import Button from "../button"
import styles from './applicant-info.module.css'

type Props = {
    app: ApplicationData,
}


const ApplicantInfo = ({ app }) => {
    const photoId = app[
        'Please upload a recent headshot. Label the file "Last-name First-name Headshot". (Please .jpeg and .png ONLY)'
    ]
        .split("id=")[1]
        .split("&")[0];

    return (
        <>
            <p style={{ display: "flex", flexDirection: "column" }}>
                <span>
                    <span className={styles.info}>Pronouns:</span>{" "}
                    <span>{app["Pronouns"]}</span>
                </span>
                <span>
                    <span className={styles.info}>Class Standing:</span>{" "}
                    <span>{app["Class Standing"]}</span>
                </span>
                <span>
                    <span className={styles.info}>Major:</span>{" "}
                    <span>
                        {app["Declared Major"]} {app["What is your second major?"]}
                    </span>
                </span>
                {app["Do you have a minor?"] === "Yes" && (
                    <span>
                        <span className={styles.info}>Minor(s):</span>{" "}
                        <span>{app["What is your minor(s)?"]} </span>
                    </span>
                )}
                <span>
                    <span className={styles.info}>GPA:</span>{" "}
                    <span>{app["What is your cumulative GPA?"]}</span>
                </span>
            </p>
            <div style={{ height: 250, maxWidth: 200, paddingBottom: 8 }}>
                <div
                    style={{
                        position: "relative",
                        maxWidth: "100%",
                        height: "100%",
                    }}
                >
                    <Image
                        src={`https://drive.google.com/thumbnail?id=${photoId}`}
                        alt={`headshot of ${app["First Name"]} ${app["Last Name"]}`}
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                    />
                </div>
            </div>
            <a
                target="_blank"
                rel="noreferrer"
                href={
                    app[
                    'Please upload your resume. Label the file "Last-name First-name Resume".'
                    ]
                }
            >
                <Button>View Resume</Button>
            </a>
        </>
    )

}

export default ApplicantInfo