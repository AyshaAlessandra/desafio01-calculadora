import { useState } from "react";
import Buttom from "./components/Buttom";
import Input from "./components/Input";

import { Container, Content, Row } from "./styles";

const App = () => {
	const [currentNumber, setCurrentNumber] = useState("0");
	const [firsNumber, setFirsNumber] = useState("0");
	const [operation, setOperation] = useState("");

	const handleOnClear = () => {
		setCurrentNumber("0");
		setFirsNumber("0");
		setOperation("");
	};

	const handleNumber = (num) => {
		setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
	};

	const handleFloatingPoint = (point) => {
		setCurrentNumber((prev) => `${prev === "." ? "" : prev}${point}`);
	};

	const handleSumNumbers = () => {
		if (firsNumber === "0") {
			setFirsNumber(String(currentNumber));
			setCurrentNumber("0");
			setOperation("+");
		} else {
			const sum = Number(firsNumber) + Number(currentNumber);
			setCurrentNumber(String(sum));
			setOperation("");
		}
	};

	const handleMinusNumbers = () => {
		if (firsNumber === "0") {
			setFirsNumber(String(currentNumber));
			setCurrentNumber("0");
			setOperation("-");
		} else {
			const min = Number(firsNumber) - Number(currentNumber);
			setCurrentNumber(String(min));
			setOperation("");
		}
	};

	const handleMultiplyNumbers = () => {
		if (firsNumber === "0") {
			setFirsNumber(String(currentNumber));
			setCurrentNumber("0");
			setOperation("*");
		} else {
			const mult = Number(firsNumber) * Number(currentNumber);
			setCurrentNumber(String(mult));
			setOperation("");
		}
	};

	const handleDivisionNumbers = () => {
		if (firsNumber === "0") {
			setFirsNumber(String(currentNumber));
			setCurrentNumber("0");
			setOperation("/");
		} else {
			const div = Number(firsNumber) / Number(currentNumber);
			setCurrentNumber(String(div));
			setOperation("");
		}
	};

	const handleEquals = () => {
		if (firsNumber !== "0" && operation !== "" && currentNumber !== "0") {
			switch (operation) {
				case "+":
					handleSumNumbers();
					break;
				case "-":
					handleMinusNumbers();
					break;
				default:
					break;
				case "*":
					handleMultiplyNumbers();
					break;
				case "/":
					handleDivisionNumbers();
					break;
			}
		}
	};

	return (
		<Container>
			<Content>
				<Input value={currentNumber} />
				<Row>
					<Buttom label="*" onclick={handleMultiplyNumbers} />
					<Buttom label="/" onclick={handleDivisionNumbers} />
					<Buttom label="-" onclick={handleMinusNumbers} />
					<Buttom label="C" onclick={handleOnClear} />
				</Row>
				<Row>
					<Buttom label="7" onclick={() => handleNumber("7")} />
					<Buttom label="8" onclick={() => handleNumber("8")} />
					<Buttom label="9" onclick={() => handleNumber("9")} />
					<Buttom label="+" onclick={handleSumNumbers} />
				</Row>
				<Row>
					<Buttom label="4" onclick={() => handleNumber("4")} />
					<Buttom label="5" onclick={() => handleNumber("5")} />
					<Buttom label="6" onclick={() => handleNumber("6")} />
					<Buttom label="." onclick={() => handleFloatingPoint(".")} />
				</Row>
				<Row>
					<Buttom label="1" onclick={() => handleNumber("1")} />
					<Buttom label="2" onclick={() => handleNumber("2")} />
					<Buttom label="3" onclick={() => handleNumber("3")} />
					<Buttom label="=" onclick={handleEquals} />
				</Row>
				<Row>
					<Buttom label="0" onclick={() => handleNumber("0")} />
				</Row>
			</Content>
		</Container>
	);
};

export default App;
