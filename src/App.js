import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import { evaluate } from "mathjs";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "0",
            previousVal: "",
            previousAnswer: "",
            evaluated: false,
            decimalInVal: false
        };
    }

    addToInput = val => {
        const operators = ["+", "-", "*", "/"];
        const isOperator = operators.includes(val);

        if (this.state.previousVal === "." && val === ".") {
            return null;
        }
        // Normal input - will append to end
        if (!this.state.evaluated && this.state.input !== "0") {
            if (isOperator && operators.includes(this.state.previousVal)) {
                this.clearLastOperator(val);
                return null;
            }

            this.setState({
                input: this.state.input + val,
                evaluated: false,
                previousVal: val
            });

            // For cases where we want to use the answer and perform another operation ( starts with + - * / )
        } else if (this.state.evaluated && isOperator) {
            this.setState({
                input: this.state.input + val,
                evaluated: false,
                previousVal: val
            });
        }

        // For cases where the answer is in the display, but the user has entered a number (starts a new calculation)
        else {
            this.setState({ input: val, evaluated: false, previousVal: val });
        }
    };

    // To prevent multiple zeros
    addZeroToInput = val => {
        if (this.state.input !== "0") {
            this.setState({ input: this.state.input + val, previousVal: val });
        }
    };

    clearInput = () => {
        this.setState({
            input: "0"
        });
    };

    clearLastOperator = val => {
        const appendVal = typeof val === "string" ? val : "";
        const nextInput = this.state.input.slice(0, -1) + appendVal;
        this.setState({
            input: !!nextInput ? nextInput : "0",
            previousVal: val
        });
    };

    clearLast = () => {
        const nextInput = this.state.input.slice(0, -1);
        this.setState({
            previousVal: this.state.input.slice(
                this.state.input.length - 2,
                this.state.input.length - 1
            ),
            input: !!nextInput ? nextInput : "0"
        });
    };

    operate = () => {
        this.setState({
            input: ""
        });
    };

    evaluate = () => {
        const answer = evaluate(this.state.input);
        this.setState({
            input: answer,
            evaluated: true,
            previousAnswer: answer
        });
    };

    render() {
        return (
            <div className="App">
                <div className="calc-wrapper">
                    <div className="row">
                        <Input id="display">{this.state.input}</Input>
                    </div>
                    <div className="row">
                        <Button id="seven" handleClick={this.addToInput}>
                            7
                        </Button>
                        <Button id="eight" handleClick={this.addToInput}>
                            8
                        </Button>
                        <Button id="nine" handleClick={this.addToInput}>
                            9
                        </Button>
                        <Button id="divide" handleClick={this.addToInput}>
                            /
                        </Button>
                    </div>
                    <div className="row">
                        <Button id="four" handleClick={this.addToInput}>
                            4
                        </Button>
                        <Button id="five" handleClick={this.addToInput}>
                            5
                        </Button>
                        <Button id="six" handleClick={this.addToInput}>
                            6
                        </Button>
                        <Button id="multiply" handleClick={this.addToInput}>
                            *
                        </Button>
                    </div>
                    <div className="row">
                        <Button id="one" handleClick={this.addToInput}>
                            1
                        </Button>
                        <Button id="two" handleClick={this.addToInput}>
                            2
                        </Button>
                        <Button id="three" handleClick={this.addToInput}>
                            3
                        </Button>
                        <Button id="add" handleClick={this.addToInput}>
                            +
                        </Button>
                    </div>
                    <div className="row">
                        <Button id="decimal" handleClick={this.addToInput}>
                            .
                        </Button>
                        <Button id="zero" handleClick={this.addZeroToInput}>
                            0
                        </Button>
                        <Button id="equals" handleClick={this.evaluate}>
                            =
                        </Button>
                        <Button id="subtract" handleClick={this.addToInput}>
                            -
                        </Button>
                    </div>
                    <div className="clear-btn">
                        <ClearButton id="clear" handleClick={this.clearInput}>
                            Clear
                        </ClearButton>
                        <ClearButton
                            id="clearlast"
                            handleClick={this.clearLast}
                        >
                            Clear Last
                        </ClearButton>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
