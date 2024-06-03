import { ValidationError } from "../../errors/index.js";

/**
 * Checks if a value is a Spanish alphanumeric string.
 * @param {string} value - The value to be checked.
 * @param {string} field - The name of the field being validated.
 * @throws {Error} Throws an error if the value is not alphanumeric.
 */
const isSpanishAlphanumeric = (value, field) => {
	const regex = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/i;
	if (!regex.test(value)) {
        throw new ValidationError("El valor debe contener solo caracteres alfanuméricos.", field);
    }
};

/**
 * Checks if the given value contains only Spanish alphabetic characters and spaces.
 * 
 * @param {string} value - The value to be validated.
 * @param {string} field - The name of the field being validated.
 * @throws {Error} Throws an error if the value contains non-alphabetic characters.
 */
const isSpanishAlpha = (value, field) => {
    if (value.trim() === '') {
        return; 
    }
	const regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/i;
	if (!regex.test(value)) {
        throw new ValidationError("El valor debe contener solo caracteres alfabéticos.", field);
    }
};

export { isSpanishAlphanumeric, isSpanishAlpha };
