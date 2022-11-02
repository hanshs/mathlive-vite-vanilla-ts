export default function (
  node: HTMLDivElement,
  text: string,
  onClick: () => void
) {
  const b = document.createElement("button");
  b.appendChild(document.createTextNode(text));
  b.addEventListener("click", onClick);
  node.appendChild(b);
}
