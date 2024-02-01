import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PagesLayout from '../lyouts/pagesLyout';
import { fetchUser } from '../api/user';

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
        const {data:user, isLoading:userLoading} = useQuery({
            queryKey: ['user'],
            queryFn: fetchUser
            }
        )
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
        <PagesLayout>
        <form onSubmit={handleSubmit} className="container">
            <h2>
                {userLoading ? 'Loading...' :" hola "+ user?.first_name + ' ' + user?.last_name}
            </h2>
            <h2>Demographic Data</h2>
            <div className="row">
                <div className="form-group col-3">
                    <label htmlFor="age">Age:</label>
                    <input type="number" name="age" value={demographicData.age} onChange={handleDemographicDataChange} className="form-control" />
                </div>
                <div className="form-group col-3">
                    <label htmlFor="birthSex">Birth Sex:</label>
                    <input type="text" name="birthSex" value={demographicData.birthSex} onChange={handleDemographicDataChange} className="form-control" />
                </div>
                <div className="form-group col-3">
                    <label htmlFor="city">City of Residence:</label>
                    <input type="text" name="city" value={demographicData.city} onChange={handleDemographicDataChange} className="form-control" />
                </div>
                <div className="form-group col-3">
                    <label htmlFor="workplace">Workplace:</label>
                    <select name="workplace" value={demographicData.workplace} onChange={handleDemographicDataChange as unknown as React.ChangeEventHandler<HTMLSelectElement>} className="form-control">
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
                </div>
            <div className="form-group col-3">
                <label htmlFor="commuteTime">Commute Time:</label>
                <input type="number" name="commuteTime" value={demographicData.commuteTime} onChange={handleDemographicDataChange} className="form-control" />
            </div>
            <br/>
            <br/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <form onSubmit={handleSubmit} className="container">

            <h2>Fantastic Test</h2>
            {/* Render the 25 questions of the Fantastic Test here */}
            {/* Each question should have an input or select element to capture the answer */}
            {/* Use the handleTestAnswerChange function to update the testAnswers state */}

            <button type="submit">Submit</button>
        </form>
    </PagesLayout>
    );
};

export default TakeTest;
