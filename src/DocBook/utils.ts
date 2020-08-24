export function textToIcon(text: string): string {
  const iconMap = {
    info: "Info",
    abbrev: "TagUnknown",
    acronym: "ChromeMinimize",
    alt: "CalculatorEqualTo",
    annotation: "QuickNote",
    coref: "PageLink",
    date: "EventDate",
    emphasis: "Italic",
    firstterm: "CheckboxIndeterminate",
    footnote: "Footer",
  };
  return iconMap[text] || "InsertTextBox";
}
