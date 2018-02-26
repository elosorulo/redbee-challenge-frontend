export class User {
	userName: string;
	email: string;
	interests: Interests;

	constructor(userName: string, email: string, interests: Interests) {
		this.userName = userName;
		this.email = email;
		this.interests = interests;
	}
}

export class Interests {
	profiles: string[];
	hashTags: string[];

	constructor(profiles: string[], hashTags: string[]) {
		this.profiles = profiles;
		this.hashTags = hashTags;
	}
}

export class ExecutionStatus {
	statusCode: number;
	executionType: string;
	message: string;

	constructor(statusCode: number, executionType: string, message: string) {
		this.statusCode = statusCode;
		this.executionType = executionType;
		this.message = message;
	}
}

export class UsersResponse {
	executionStatus: ExecutionStatus;
	users: User[];

	constructor(executionStatus: ExecutionStatus, users: User[]) {
		this.executionStatus = executionStatus;
		this.users = users;
	}
}

export class UserResponse {
	executionStatus: ExecutionStatus;
	user: User[];

	constructor(executionStatus: ExecutionStatus, user: User[]) {
		this.executionStatus = executionStatus;
		this.user = user;
	}
}

export class UserInterestsResponse {
	executionStatus: ExecutionStatus;
	userInterests: Interests;

	constructor(executionStatus: ExecutionStatus, userInterests: Interests) {
		this.executionStatus = executionStatus;
		this.userInterests = userInterests;
	}
}