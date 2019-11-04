import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { evaluate } from "mathjs";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "0",
            previousVal: "",
            previousAnswer: "",
            evaluated: false,
            decimalInNumber: false
        };
    }

    addToInput = val => {
        const operators = ["+", "-", "*", "/"];
        const isOperator = operators.includes(val);

        if (this.state.decimalInNumber && val === ".") {
            return null;
        }
        // Normal input - will append to end
        if (!this.state.evaluated && this.state.input !== "0") {
            // If the previous value is an operator, replace it with the new operator.
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
            this.setState({
                input: val,
                evaluated: false,
                previousVal: val,
                decimalInNumber: false
            });
        }

        if (val === ".") {
            this.setState({ decimalInNumber: true });
        }

        if (isOperator) {
            this.setState({ decimalInNumber: false });
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
        const answer = evaluate(this.state.input).toString();
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
                        <Button id="clear" handleClick={this.clearInput}>
                            Clear
                        </Button>
                        <Button id="clearlast" handleClick={this.clearLast}>
                            Del
                        </Button>
                        <Button
                            id="divide"
                            operator={"/"}
                            handleClick={this.addToInput}
                        >
                            &#247;
                        </Button>
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
                        <Button
                            id="multiply"
                            operator={"*"}
                            handleClick={this.addToInput}
                        >
                            &#215;
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
                        <Button
                            id="subtract"
                            operator={"-"}
                            handleClick={this.addToInput}
                        >
                            &#8722;
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
                        <Button
                            id="add"
                            operator={"+"}
                            handleClick={this.addToInput}
                        >
                            &#43;
                        </Button>
                    </div>
                    <div className="row">
                        <Button id="zero" handleClick={this.addZeroToInput}>
                            0
                        </Button>
                        <Button id="decimal" handleClick={this.addToInput}>
                            .
                        </Button>
                        <Button id="equals" handleClick={this.evaluate}>
                            =
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
