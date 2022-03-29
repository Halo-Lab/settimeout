import AtImage from "./at.png";
import OgImage from "./og-image.jpg";
import MenImage from "./men.svg";
import MailImage from "./mail.png";
import NoteImage from "./note.png";
import BookImage from "./book.png";
import LogoImage from "./logo.png";
import NoPageImage from "./nopageimage.png";
import CitateImage from "./citate.png";
import NotepadImage from "./notepad.png";
import GreetingImage from "./greeting.png";
import TypingManImage from "./typing-man.svg";
import LogoFooterImage from "./logo-footer.png";
import TwitterCardImage from "./twitter-card-image.jpg";
import ErrorPageLogoImage from "./error-page-logo.png";
import InvertedNotepadImage from "./inverted-notepad.png";

// TODO: name images properly
import Book1Image from "./unsubscribe/book-1.png";
import Book2Image from "./unsubscribe/book-2.png";
import Mail1Image from "./unsubscribe/mail-1.png";
import Note1Image from "./unsubscribe/note-1.png";
import Greeting1Image from "./unsubscribe/greeting-1.svg";
import TypingManSadImage from "./unsubscribe/typing-man-sad.svg";

export enum Image {
	MAN = "men",
	NOTE = "note",
	BOOK = "book",
	LOGO = "logo",
	MAIL = "mail",
	NOTE_1 = "note-1",
	BOOK_1 = "book-1",
	BOOK_2 = "book-2",
	MAIL_1 = "mail-1",
	UNKNOWN = "unknown",
	GREETING = "greeting",
	GREETING_1 = "greeting-1",
	ERROR_LOGO = "error-logo",
	TYPING_MAN = "typing-man",
	LOGO_FOOTER = "logo-footer",
	TYPING_MAN_SAD = "typing-man-sad",
	NOT_FOUND_PAGE = "not-found-page",
}

const Images: Record<Image, string> = {
	[Image.MAN]: MenImage,
	[Image.BOOK]: BookImage,
	[Image.LOGO]: LogoImage,
	[Image.MAIL]: MailImage,
	[Image.NOTE]: NoteImage,
	[Image.NOTE_1]: Note1Image,
	[Image.BOOK_1]: Book1Image,
	[Image.BOOK_2]: Book2Image,
	[Image.MAIL_1]: Mail1Image,
	[Image.UNKNOWN]: "#",
	[Image.GREETING]: GreetingImage,
	[Image.GREETING_1]: Greeting1Image,
	[Image.ERROR_LOGO]: ErrorPageLogoImage,
	[Image.TYPING_MAN]: TypingManImage,
	[Image.LOGO_FOOTER]: LogoFooterImage,
	[Image.TYPING_MAN_SAD]: TypingManSadImage,
	[Image.NOT_FOUND_PAGE]: NoPageImage,
};

export const getImageURI = (name: Image) =>
	Images[name] ?? Images[Image.UNKNOWN];
