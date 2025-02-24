export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2 && typeof parts[1] === 'string') {
        return parts[1].split(';').shift() || null;
    }
    return null;
}

export function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1980 00:00:00 UTC;path=/;`;
}

export function setCookie(name, value, options) {
    const expires = new Date();
    expires.setTime(expires.getTime() + options.expires * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

export function encrypt(email) {
    return email.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
}

export function decrypt(email) {
    return email.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
}
