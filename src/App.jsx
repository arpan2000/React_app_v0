import { useState } from 'react'

import { CORE_CONCEPTS } from "./data.js"
import { EXAMPLES } from './data.js';
import { Header } from "./components/Header.jsx"
import { CoreConcept } from "./components/CoreConcept.jsx";
import { TagButton } from "./components/TagButton.jsx";

// function are components in React

function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} /> */}
            {/* using JS property of spread */}
            {/* <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem}/>))}

          </ul>
        </section>

        <section id="examples">
          <menu>
            <TagButton isSelected = {selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TagButton>
            <TagButton isSelected = {selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TagButton>
            <TagButton isSelected = {selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TagButton>
            <TagButton isSelected = {selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TagButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
