import React from "react";
import * as UI from "@fluentui/react";
import bind from "bind-decorator";
import { textToIcon } from "./utils";
import Transformer from "@publica.re/react-xml-transformer";

export interface SidebarProps {
  possible: {
    node: Node;
    elements: object[];
    attributes: object[];
  }[];
  text?: {
    text: string;
    node: Node;
    start: number;
    end: number;
  };
  emit: (newText: string) => void;
}

export interface SidebarState {}

export default class Sidebar extends React.Component<
  SidebarProps,
  SidebarState
> {
  constructor(props: SidebarProps) {
    super(props);

    this.state = {
      ...this.state,
    };
  }
  @bind
  updateValue(newValue: string) {
    if (this.props.text) {
      this.props.text.node.textContent = newValue;
      this.props.emit(
        Transformer.computeXPathFromElement(this.props.text?.node)
      );
    }
  }

  render() {
    return (
      <div className="SideBar">
        <UI.Pivot>
          {this.props.possible.map((possible) => {
            console.log(possible.node.nodeName);

            return (
              <UI.PivotItem
                headerText={possible.node.nodeName}
                key={possible.node.nodeName}
              >
                <input
                  value={this.props.text?.text}
                  onChange={(event) =>
                    this.updateValue((event.target as any).value)
                  }
                />
                <div className="Elements">
                  {(possible.elements || []).map(
                    (element: any, index: number) => {
                      return (
                        <UI.CompoundButton
                          iconProps={{
                            iconName: textToIcon(element.localName),
                          }}
                          key={`${element}+${index}`}
                          secondaryText={element.documentation}
                        >
                          {element.localName}
                        </UI.CompoundButton>
                      );
                    }
                  )}
                </div>
                <div className="Attributes">
                  <UI.DetailsList
                    selectionMode={UI.SelectionMode.none}
                    columns={[
                      {
                        key: "attr",
                        fieldName: "attr",
                        name: "Attribute",
                        minWidth: 50,
                      },
                      {
                        key: "doc",
                        fieldName: "doc",
                        name: "Documentation",
                        minWidth: 150,
                      },
                      {
                        key: "val",
                        fieldName: "val",
                        name: "Value",
                        minWidth: 200,
                      },
                    ]}
                    items={(possible.attributes || []).map(
                      (attribute: any) => ({
                        attr: attribute.localName,
                        doc: attribute.documentation,
                        val: (possible.node as Element)?.getAttribute(
                          attribute.localName
                        ),
                      })
                    )}
                  />
                </div>
              </UI.PivotItem>
            );
          })}
        </UI.Pivot>
      </div>
    );
  }
}
