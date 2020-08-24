import * as React from "react";
import * as UI from "@fluentui/react";
import "./XMLEditingTools.sass";

export interface InsertBlockProps {
  children?: React.ReactNode;
}

export interface InsertBlockState {}

export default class InsertBlock extends React.Component<
  InsertBlockProps,
  InsertBlockState
> {
  constructor(props: InsertBlockProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="EditingTool Element">
        <span className="EditingTool Menu">
          <UI.IconButton
            iconProps={{ iconName: "GlobalNavButton" }}
            menuProps={{
              items: [
                {
                  key: "insert",
                  text: "Name",
                },
              ],
            }}
          />
        </span>
        {this.props.children}
        <UI.Separator>
          <UI.Icon iconName="Add" />
        </UI.Separator>
      </div>
    );
  }
}
