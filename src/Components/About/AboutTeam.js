import React from 'react';
import humanAvatar from '../../Assets/images/humanAvatar.png';
import './AboutTeam.css';
const AboutTeam = () => {
    const teamInfo = [
        {
            _id: 'ashikul123',
            name: 'Md Ashikul Islam',
            title: 'Team leader | Backend dev',
            email: 'ashikul.islam.ugrad16@gmail.com',
            phone: '01312535319',
            short_description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, earum.',
            img: humanAvatar
        },
        {
            _id: 'talha123',
            name: 'Abdur Rahman Talha',
            title: 'Fronted Developer',
            email: 'abdurrahmantalha.dev@gmail.com',
            phone: '01325105101',
            short_description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, earum.',
            img: humanAvatar
        },
        {
            _id: 'jahid123',
            name: 'Jahid Iqbal',
            title: 'Frontend developer',
            email: 'jahid.iqbal211@gmail.com',
            phone: '01624980036',
            short_description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, earum.',
            img: humanAvatar
        },
        {
            _id: 'totan123',
            name: 'Totan Sarker',
            title: 'Frontend developer',
            email: 'totansarker2@gmail.com',
            phone: '01627415791',
            short_description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, earum.',
            img: humanAvatar
        },
        {
            _id: 'naime123',
            name: 'Md. Naime Molla',
            title: 'Full stack developer',
            email: 'naime2molla@gmail.com',
            phone: '01926527994',
            short_description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, earum.',
            img: humanAvatar
        }
    ];
    return (
        <>
            <div className="teamTitle">
                <h1>
                    Meet With Our <span>Team</span>
                </h1>
            </div>
            <div className="teamPersonCardSection">
                {teamInfo.map((info) => (
                    <dic className="teamPersonCard">
                        <div className="personImg">
                            <img src={info.img} alt="images of the person" />
                        </div>
                        <div className="personTextual">
                            <h1>Name: {info.name}</h1>
                            <h3>{info.title}</h3>
                            <p className="personEmail">{info.email}</p>
                            <p className="peronPhone">Phone: {info.phone}</p>
                            <p className="shortDescription">{info.short_description}</p>
                            <img
                                src="https://tenor.com/view/drop-of-blood-objects-joypixels-bit-of-blood-blood-stain-gif-17448098"
                                alt=""
                            />
                        </div>
                    </dic>
                ))}
            </div>
        </>
    );
};

export default AboutTeam;
