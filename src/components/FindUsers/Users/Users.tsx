import React from 'react';
import {UsersPropsType} from "../UsersContainer";

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                avatar: "data:image/jpeg;base64,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",
                followed: true,
                fullName: 'John R.',
                status: "I'm like football",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                avatar: "data:image/jpeg;base64,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",
                followed: true,
                fullName: 'Mary O.',
                status: "I'm like eat meet",
                location: {city: "Kiev", country: "Ukraine"}
            },
            {
                id: 3,
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajZyb9DZBuXtTLbZy1qWsduBD0jgSvu94uQ&usqp=CAU",
                followed: false,
                fullName: 'Pavel H.',
                status: "I'm like flowers",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 4,
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6_mRtVz12fkqcjAn2jG1tkynlHbrGt7u6eA&usqp=CAU",
                followed: false,
                fullName: 'Dimych K.',
                status: "I don't lick John",
                location: {city: "Philadelphia", country: "USA"}
            }
        ])
    }

    return (
        <>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img style={{height: "150px", width: "150px"}} src={u.avatar} alt={"ImgPerson"}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </>
    );
};

