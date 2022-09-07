import Button from "../button"
import QA from "../question-answer/qa"
import styles from './question-list.module.css'

type Props = {
    app: Object
}

const questions = [
    "How did you hear about Theta Tau?",
    "Which rush events did you attend (or which will you attend)?",
    "Why do you want to join Theta Tau? (100 Words)",
    "The three pillars of Theta Tau are Service, Profession, and Social. If you could plan one event for the organization related to one (or more) of these principles, what would it be? Briefly describe your event. (200 Words)",
    "Which of the three pillars (Service, Professionalism, or Social) do you feel is the most important to you? In other words, what aspect of the Organization do you hope to get the most out of? (200 Words)",
    "What THREE books/movies/TV shows describe you most accurately (without explaining why they describe you).",
    "What fictional character do you feel best represents you AND why? (100 Words)",
    "You are traveling out west when suddenly you wake up stranded in the middle of a cornfield in Idaho. You recognize the area (you travel a lot) and remember that the closest civilization is 200 miles away, but you are nearly out of food and water. On top of that, your donkey has gone missing. You stumble into a random junkyard where you collect a single pencil, a pair of tennis balls, a porcelain cup, an egg, a basket of letter sized papers, an apple, a swiss army knife, two pieces of scrap wood, a mirror, and a lasso. You know that in 10 days farmers will come tend the area you are in, which means you must keep yourself alive and entertained for that amount of time. Describe which materials you would use to survive this situation. Feel free to use natural resources to help with your creations (250 Words)."
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
