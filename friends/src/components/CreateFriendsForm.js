import React from "react";

const CreateFriendsForm = props => {
	return (
		<form>
			<input
				type="text"
				name="name"
				placeholder="Enter friend's name"
				onChange={props.handleNewFriend}
			/>
			<input
				type="text"
				name="age"
				placeholder="Enter friend's age"
				onChange={props.handleNewFriend}
			/>
			<input
				type="text"
				name="email"
				placeholder="Enter friend's email"
				onChange={props.handleNewFriend}
			/>
			<button
				type="button"
				onClick={() => props.createFriends(props.friend)}
			>
				Create Friend
			</button>
		</form>
	);
};

export default CreateFriendsForm;
