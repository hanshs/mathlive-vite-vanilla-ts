export default function (node: HTMLDivElement, tag: string, text: string) {
  const h = document.createElement(tag);
  h.appendChild(document.createTextNode(text));

  node.appendChild(h);
}
