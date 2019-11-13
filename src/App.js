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
            decimalInNumber: false,
            negativeSignInNumber: false
        };
    }

    // Handler for "0" input. The logic is to prevent multiple leading zeros
    addZeroToInput = val => {
        if (this.state.input !== "0") {
            this.setState({ input: this.state.input + val, previousVal: val });
        }
    };

    // Handler for all other input, other than "0".
    addToInput = val => {
        const operators = ["+", "-", "*", "/"];
        const operatorsNoSubtract = ["+", "*", "/"];
        const isOperator = operators.includes(val);
        const {
            decimalInNumber,
            input,
            evaluated,
            previousVal,
            negativeSignInNumber
        } = this.state;

        if (
            (decimalInNumber && val === ".") ||
            (negativeSignInNumber && val === "-")
        ) {
            return null;
        }

        if (
            (val === "-" && input === "0") ||
            (val === "-" && operators.includes(previousVal))
        ) {
            this.setState({ negativeSignInNumber: true });
        }

        // Normal input - will append to end
        if (!evaluated && input !== "0") {
            // if val is "-" and previousval is +, *, /
            if (val === "-" && operatorsNoSubtract.includes(previousVal)) {
                // if val is +, -, /, * and the previous value is is +, *, /, replace operator with new operator
            } else if (isOperator && operators.includes(previousVal)) {
                this.clearLastOperator(val);
                return null;
            }

            this.setState({
                input: input + val,
                evaluated: false,
                previousVal: val,
                negativeSignInNumber: false
            });

            // For cases where we want to use the answer and perform another operation ( starts with + - * / )
        } else if (evaluated && isOperator) {
            this.setState({
                input: input + val,
                evaluated: false,
                previousVal: val,
                negativeSignInNumber: false
            });
        }

        // For cases where the answer is in the display, but the user has entered a number (starts a new calculation)
        else {
            this.setState({
                input: val,
                evaluated: false,
                previousVal: val,
                decimalInNumber: false,
                negativeSignInNumber: false
            });
        }

        if (val === ".") {
            this.setState({ decimalInNumber: true });
        }

        if (isOperator) {
            this.setState({ decimalInNumber: false });
        }
    };

    clearInput = () => {
        this.setState({
            input: "0",
            previousVal: "",
            previousAnswer: "",
            evaluated: false,
            decimalInNumber: false,
            negativeSignInNumber: false
        });
    };

    /**
     * Is used when there's currently an operator and another operator is entered.
     * The "-" key doubles as both subtract and negative, so use case examples are below:
     * If 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7)
     * If 5 * - 5 = is entered, the result should be -25 (i.e. 5 * -5)
     * If 5 * - + 5 is entered, the result should be 10. (i.e. 5 + 5)
     *
     * As such, the "end" value for slice changes depending on the previous operator(s) via remainingChars.
     */
    clearLastOperator = val => {
        const { previousVal, input } = this.state;
        const operators = ["+", "-", "*", "/"];
        const isOperator = operators.includes(val);

        const remainingChars =
            isOperator &&
            previousVal === "-" &&
            operators.includes(input[input.length - 1])
                ? input.slice(0, -2)
                : input.slice(0, -1);
        const nextInput = remainingChars + val;
        this.setState({
            input: !!nextInput ? nextInput : "0",
            previousVal: val
        });
    };

    /**
     * For use with the "Del" key. The previousVal is set to know whether to allow an operator
     */
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
