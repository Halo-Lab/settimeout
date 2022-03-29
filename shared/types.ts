import { Tag } from "/shared/assets";

export interface Card {
	readonly link: string;
	readonly tags: readonly Tag[];
	readonly title: string;
	readonly author: string;
	readonly description: string;
}

export interface Section {
	readonly title: string;
	readonly cards: readonly Card[];
}

export interface Email {
	readonly name: string;
	readonly number: number;
	readonly sections: readonly Section[];
	readonly createdAt: string;
	readonly greetingTitle?: string;
	readonly greetingSubtitle?: string;
}

export interface ErrorResult {
	// List of codes: https://www.unisender.com/en/support/api/common/api-errors/
	readonly code: string;
	readonly error: string;
}

export interface SuccessResult<T> {
	readonly result: T;
}

export type Result<T> = SuccessResult<T> | ErrorResult;

export interface ContactEmail {
	readonly email: string;
	readonly rating: number;
	readonly status: string;
	readonly added_at: string;
	readonly availability: string;
	readonly last_send_datetime: string;
	readonly last_read_datetime: string;
	readonly last_click_datetime: string;
	readonly last_delivery_datetime: string;
}

export interface ContactInfo {
	readonly id: string;
	readonly status: string;
	readonly added_at: string;
}

export interface Contact {
	readonly email: ContactEmail;
	readonly lists: readonly ContactInfo[];
	readonly fields: Record<string, string | number>;
}

export interface AddedContactInfo {
	readonly person_id: string;
}
