const noop = v => v;

const wrapElement = marked => example => {
  // creation du container
  const container = document.createElement('div');
  container.className = 'docs-container';
  // insert example element into container
  example.parentNode.insertBefore(container, example);
  container.appendChild(example);
  // inject code after example element
  let source = example.innerHTML.trim();
  source = '```html\n' + source + '\n```';
  source = marked.lexer(source);
  source = marked.parser(source);
  source = `<div class="source pre-is-hidden">${source}</div>`;
  example.insertAdjacentHTML('afterend', source);
  return container;
};

const addClickToElement = elm =>
  elm.addEventListener('click', evt => {
    const notVisible = elm.querySelector(':scope > .pre-is-hidden');
    const visible = elm.querySelector(':scope > :not(.pre-is-hidden)');
    notVisible.classList.remove('pre-is-hidden');
    visible.classList.add('pre-is-hidden');
  });

const viewSourcePlugin = function(hook, vm) {
  const marked = window.marked || noop;
  hook.doneEach(() => {
    let queriesElts = document.querySelectorAll('pre.example');
    let targets = Array.apply(null, queriesElts);
    targets.forEach(wrapElement(marked));
    // add clicks
    queriesElts = document.querySelectorAll('.docs-container');
    targets = Array.apply(null, queriesElts);
    targets.forEach(addClickToElement);
  });
};

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [viewSourcePlugin].concat(
  window.$docsify.plugins || []
);
