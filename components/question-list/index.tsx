import Button from "../button"
import QA from "../question-answer/qa"
import styles from './question-list.module.css'

type Props = {
    app: Object
}

const questions = [
    "How did you hear about Theta Tau?",
    "Did you contract COVID-19 during the recruitment process (to ensure all candidates are given a fair evaluation and invite eligible candidates to a virtual event)?",
    "Which rush events did you attend (or which will you attend)?",
    "Why do you want to join Theta Tau? Which of the three pillars (Service, Professionalism, or Social) resonates most with you? (250 Words)",
    "The three pillars of Theta Tau are Service, Professionalism, and Social. If you could plan one event for the organization related to one (or more) of these principles, what would it be? Briefly describe your event. (200 Words)",
    "What THREE books/movies/TV shows describe you most accurately (without explaining why they describe you).",
    "What fictional character do you feel best represents you AND why? (100 Words)",
    "You wake up one day in a ghost town with no idea how you got there. You recognize the area as being somewhere in Montana from a game of GeoGuessr you played and realize that the closest human being is 150 miles away. Unfortunately, your pockets have been emptied and all you have is a can of spray paint. You luckily stumble upon a backpack that has a single strike-anywhere match, a potato, a thermos, an old school video camera, a tennis ball, tweezers, an apple, a swiss army knife, two pieces of scrap wood, a mirror, and a blank canvas. You know that a train is going to pass through this town in 10 days, which means you must keep yourself alive and entertained for that amount of time. Describe which materials you would use to survive this situation. Feel free to use natural resources to help with your creations (250 Words)."
]

const QuestionList = ({ app }: Props) => {
    return (
        <ul className={styles.questionList}>
            {questions.map((question, index) => {
                return (
                    <QA
                        key={index}
                        q={question}
                        a={app[question]}
                    />
                )
            })}
            <li>
                {app[
                    "Optional: Upload a photo of your creation if you feel words can't do it justice."
                ] && (
                        <div style={{ marginBottom: "var(--gap-double)" }}>
                            <a
                                href={
                                    app[
                                    "Optional: Upload a photo of your creation if you feel words can't do it justice."
                                    ]
                                }
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Button>Open image of creation</Button>
                            </a>
                        </div>
                    )}
            </li>
        </ul>
    )
}

export default QuestionList
