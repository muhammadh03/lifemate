import { useState } from "react";


const BMICalculator = () => {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState('');
    const [category, setCategory] = useState('');
    const [popup, setPopup] = useState(false);

    const calculateBMI = () => {

        // Convert height to meters
        const heightInMeters = height / 100;

        // Validate inputs
        if (weight > 0 && height > 0) {
            const calculateBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBMI(calculateBmi);

            let bmiCategory;

            // Determine BMI category
            if (calculateBmi < 16.0) {
                bmiCategory = 'Severely Underweight';
            } else if (calculateBmi >= 16.0 && calculateBmi < 18.4) {
                bmiCategory = 'Underweight';
            } else if (calculateBmi >= 18.5 && calculateBmi < 24.9) {
                bmiCategory = 'Normal';
            } else if (calculateBmi >= 25.0 && calculateBmi < 29.9) {
                bmiCategory = 'Overweight';
            } else if (calculateBmi >= 30.0 && calculateBmi < 34.9) {
                bmiCategory = 'Moderately Obese';
            } else if (calculateBmi >= 35.0 && calculateBmi < 39.9) {
                bmiCategory = 'Severely Obese';
            } else {
                bmiCategory = 'Morbidly Obese / Very High Risk';
            }

            setCategory(bmiCategory);
            setPopup(false);
        } else {
            setBMI('');
            setCategory('');
            setPopup(true);
        }
    }

    return (
        <div className="px-4 sm:pl-10">
            <h1 className="mb-2 font-bold text-xl sm:text-3xl">Lets Calculate Your <span className="text-red-600">BMI</span></h1>
            <p className="mb-2 text-white lg:text-slate-400 text-base">
                Easily determine your body mass index with our accurate calculation tool.
            </p>

            {/* BMI calculator form */}
            <form action="" className="relative flex flex-col sm:flex-row pt-4 sm:py-4">
                <div className="ml-4 mb-2 sm:m-0">
                    {/* <label htmlFor="weight">Weight :</label> */}
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        placeholder="Weight (kg)"
                        required
                        value={weight}
                        onChange={(e) => { setWeight(e.target.value) }}
                        className="py-1 px-3 border-2 border-[#ff0000] bg-transparent text-base"
                    />
                    {/* <small>Please enter your weight in kilograms.</small> */}
                    <p className="mt-1 sm:mt-4">
                        Your BMI is : <span className="text-[#ff0000] text-center text-sm"> {bmi} </span>
                    </p>
                </div>
                <div className="ml-4">
                    {/* <label htmlFor="height">Height :</label> */}
                    <input
                        type="number"
                        id="height"
                        name="height"
                        placeholder="Height (cm)"
                        required
                        value={height}
                        onChange={(e) => { setHeight(e.target.value) }}
                        className="py-1 px-3 border-2 border-[#ff0000] bg-transparent"
                    />
                    {/* <small>Please enter your height in centimeters.</small> */}
                    <p className="mt-1 sm:mt-4">
                        Your weight is : <span className="text-[#ff0000] text-center text-sm"> {category} </span>
                    </p>
                </div>
            </form>
            <button className="ml-4 py-1 px-3 sm:py-2 sm:px-6 bg-slate-600 hover:bg-red-600 duration-300" onClick={calculateBMI}>
                CALCULATE
            </button>

            {/* Popup div for invalid */}
            {popup && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg text-center">
                        <p className="text-red-600 font-bold">Please enter valid inputs!</p>
                        <button
                            className="mt-4 py-2 px-6 bg-slate-600 hover:bg-red-600 text-white rounded"
                            onClick={() => setPopup(false)} // Close popup
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
};

export default BMICalculator;
