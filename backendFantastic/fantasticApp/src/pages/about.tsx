import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { UserInfo } from '../types/UserInfo';

const AboutPage: React.FC = () => {
    const {data:user, isLoading:userLoading} = useQuery<UserInfo>({
        queryKey: ['user'],
        }
    )
    return (
        <div className="about-page">
            <p>
                {userLoading ? 'Loading...' : user?.first_name}
            </p>
            <h1 className="about-title">About Fantastic App</h1>
            <p className="about-description">
                Fantastic App is a test application that aims to provide a fantastic user experience. It has been developed and validated by the Department of Public Health and the University National of Colombia.
            </p>
            <p className="about-usage">
                This app is designed to be used by various collectives and organizations in the field of public health. It offers a range of features and functionalities that can greatly benefit users in their daily tasks and activities.
            </p>
        </div>
    );
};

export default AboutPage;
