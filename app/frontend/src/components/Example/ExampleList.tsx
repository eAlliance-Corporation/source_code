import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What are the ALG Logistics Solutions?",
        value: "What are the ALG Logistics Solutions?"
    },
    { text: "How many locations does ALG have?", value: "How many locations does ALG have?" },
    { text: "What challenges does ALG Worldwide face ?", value: "What challenges does ALG Worldwide face ?" },
    { text: "How do I get set up with ALG?", value: "How do I get set up with ALG?" },
    { text: "Difference between Declared Value and Shipping Insurance", value: "Difference between Declared Value and Shipping Insurance" },
    { text: "Do they offer 24/7 assistance for customers?", value: "Do they offer 24/7 assistance for customers?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
