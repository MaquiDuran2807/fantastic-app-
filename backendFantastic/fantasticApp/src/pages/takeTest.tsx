import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

interface DemographicData {
    age: number;
    birthSex: string;
    city: string;
    workplace: string;
    commuteTime: number;
}

// interface TestAnswer {
//     question: string;
//     answer: string;
// }

const TakeTest = () => {
    const [demographicData, setDemographicData] = useState<DemographicData>({
        age: 0,
        birthSex: '',
        city: '',
        workplace: '',
        commuteTime: 0,
    });

    // const [testAnswers, setTestAnswers] = useState<TestAnswer[]>([]);

    // Fetch workplace options from the database using react-query
  
        const { data: workplaceOptions, isLoading } = useQuery<string[]>(
            {
                queryKey: ['workplaceOptions'],
            }
        );
        async () => {
            const response = await fetch('/api/workplaces');
            const data = await response.json();
            return data;
        }

    const handleDemographicDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDemographicData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // const handleTestAnswerChange = (question: string, answer: string) => {
    //     setTestAnswers((prevAnswers) => [
    //         ...prevAnswers,
    //         {
    //             question,
    //             answer,
    //         },
    //     ]);
    // };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Save demographic data and test answers to the database
        // using an API call
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Demographic Data</h2>
            <label>
                Age:
                <input type="number" name="age" value={demographicData.age} onChange={handleDemographicDataChange} />
            </label>
            <label>
                Birth Sex:
                <input type="text" name="birthSex" value={demographicData.birthSex} onChange={handleDemographicDataChange} />
            </label>
            <label>
                City of Residence:
                <input type="text" name="city" value={demographicData.city} onChange={handleDemographicDataChange} />
            </label>
            <label>
                Workplace:
                <select name="workplace" value={demographicData.workplace} onChange={handleDemographicDataChange as unknown as React.ChangeEventHandler<HTMLSelectElement>}>
                    {isLoading ? (
                        <option>Loading...</option>
                    ) : (
                        workplaceOptions?.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))
                    )}
                </select>
            </label>
            <label>
                Commute Time:
                <input
                    type="number"
                    name="commuteTime"
                    value={demographicData.commuteTime}
                    onChange={handleDemographicDataChange}
                />
            </label>

            <h2>Fantastic Test</h2>
            {/* Render the 25 questions of the Fantastic Test here */}
            {/* Each question should have an input or select element to capture the answer */}
            {/* Use the handleTestAnswerChange function to update the testAnswers state */}

            <button type="submit">Submit</button>
        </form>
    );
};

export default TakeTest;
