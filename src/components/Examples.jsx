import { useState } from "react";
import { EXAMPLES } from "../data";
import {TagButton} from "./TagButton.jsx"
import Section from "./Section.jsx";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState()

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
    }

    let tabContent = <p>Please select a tab</p>

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        );
    }

    return (
        <Section title="Examples" id="examples">        
            <menu>
                <TagButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TagButton>
                <TagButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TagButton>
                <TagButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TagButton>
                <TagButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TagButton>
            </menu>
            {tabContent}
        </Section>
    );
}