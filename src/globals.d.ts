declare namespace JSX {
  interface IntrinsicElements {
    script: React.DetailedHTMLProps<
      React.ScriptHTMLAttributes<HTMLScriptElement>,
      HTMLScriptElement
    > & {
      "is:inline"?: boolean;
    };
  }
}