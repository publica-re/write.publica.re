import * as React from "react";
import bind from "bind-decorator";
import * as UI from "@fluentui/react";
import * as Intl from "react-i18next";
import API from "../API";
import { ITextFieldStyleProps } from "@fluentui/react";
import "../theme";
import "./Login.sass";

export interface Props {
  api: API;
  isVisible: boolean;
  onLogin: (token: string) => void;
  children?: React.ReactNode;
}

export interface State {
  username: string;
  password: string;
}

const theme = UI.getTheme();
const componentClass = UI.mergeStyles([
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "25vmin",
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.neutralPrimary,
  },
]);

function inputStyle(
  _props: ITextFieldStyleProps
): Partial<UI.ITextFieldStyles> {
  return {
    root: {
      width: "100%",
      color: "white",
    },
    subComponentStyles: {
      label: {
        color: "white",
        fontSize: "2em",
      },
    },
  };
}

class Login extends React.Component<Props & Intl.WithTranslation, State> {
  constructor(props: Props & Intl.WithTranslation) {
    super(props);

    this.state = {
      username: "playground",
      password: "playground",
    };
  }

  @bind
  async tryLogin(
    event:
      | React.FormEvent
      | React.MouseEvent<
          | HTMLDivElement
          | HTMLAnchorElement
          | HTMLButtonElement
          | UI.BaseButton
          | UI.Button
          | HTMLSpanElement
        >
  ) {
    event.preventDefault();
    const { api, onLogin } = this.props;
    const { username, password } = this.state;
    const result = await api.login(username, password);
    if (result.status === "success") return onLogin(result.token);
    return false;
  }

  render() {
    return (
      <form
        onSubmit={this.tryLogin}
        className={`${componentClass} login ${
          this.props.isVisible ? "login-visible" : "login-hidden"
        }`}
      >
        <div>
          <UI.Stack tokens={{ childrenGap: 15 }}>
            <h1 className="principal dark" style={{ paddingRight: "50vmin" }}>
              Welcome to publica.re.
            </h1>
            <UI.Stack horizontal tokens={{ padding: 0, childrenGap: 15 }}>
              <UI.TextField
                type="text"
                name="username"
                label="User name"
                value={this.state.username}
                styles={inputStyle}
                onChange={(_event, value) => {
                  value !== undefined && this.setState({ username: value });
                }}
              />
              <UI.TextField
                type="password"
                name="password"
                label="Password"
                value={this.state.password}
                styles={inputStyle}
                onChange={(_event, value) => {
                  value !== undefined && this.setState({ password: value });
                }}
              />
            </UI.Stack>
            <UI.PrimaryButton
              iconProps={{ iconName: "Signin" }}
              onClick={this.tryLogin}
            >
              Login
            </UI.PrimaryButton>
            <input type="submit" style={{ display: "none" }} />
          </UI.Stack>
        </div>
      </form>
    );
  }
}

export default Intl.withTranslation("translation")(Login);
