import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = ["List Vendors with payments that total more than $3000", "Show items that cost more than $500?", "Top recurring items"];

const GPT4V_EXAMPLES: string[] = [
    "List vendors with payments that total more than $300 and the invoice numbers, check amounts, and dates",
    "Items that cost more than $500 and the dates, Vendor, Vendor Number and invoices information",
    "Top recurring items"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
