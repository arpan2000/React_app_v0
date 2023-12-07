import { useState } from 'react'

import { CORE_CONCEPTS } from "./data.js"
import { EXAMPLES } from './data.js';
import { Header } from "./components/Header.jsx"
import { CoreConcept } from "./components/CoreConcept.jsx";
import { TagButton } from "./components/TagButton.jsx";

// function are components in React

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components')

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            {/* using JS property of spread */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <menu>
            <TagButton onSelect={() => handleSelect('components')}>Components</TagButton>
            <TagButton onSelect={() => handleSelect('jsx')}>JSX</TagButton>
            <TagButton onSelect={() => handleSelect('props')}>Props</TagButton>
            <TagButton onSelect={() => handleSelect('state')}>State</TagButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
