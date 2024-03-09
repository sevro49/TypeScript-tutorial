type Employee = {
	readonly id: number;
	name: string;
	retire: (date: Date) => void;
};

let employee: Employee = {
	id: 1,
	name: "Emre",
	retire: (date: Date) => {
		console.log(date);
	},
};
// employee.id = 10;
