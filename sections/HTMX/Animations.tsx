import { useSection } from "deco/hooks/useSection.ts";

interface Props {
  /**
   * @ignore
   */
  getSuggestions?: boolean;
}

export default function Animations({ getSuggestions }: Props) {
  if (getSuggestions) {
    return (
      <div
        hx-post={useSection({ props: { getSuggestions: false } })}
        hx-trigger="click[event.target!==this||event.target.matches('input')] from:body"
        hx-target="this"
        hx-swap="delete"
        class="absolute top-full left-0 right-0 flex items-center justify-center p-3 rounded border border-black"
      >
        <p>Suggestions</p>
        <ul>
          <li>Suggestion 1</li>
          <li>Suggestion 2</li>
          <li>Suggestion 3</li>
          <li>Suggestion 4</li>
          <li>Suggestion 5</li>
        </ul>
      </div>
    );
  }

  if (getSuggestions === false) {
    return <></>;
  }

  return (
    <div class="relative">
      <input
        type="search"
        hx-trigger="keyup changed delay:500ms, focus"
        hx-post={useSection({ props: { getSuggestions: true } })}
        hx-target="this"
        hx-swap="afterend"
        class="w-96 h-10 bg-slate-100 border border-slate-400 transition-all duration-300 ease-in-out rounded-lg"
      />
    </div>
  );
}
