import CryptoJS from "crypto-js";

export function encrypt(email, pass) {
  let text = CryptoJS.AES.encrypt(email, pass);
  return text.toString();
}

export function decrypt(text, pass) {
  let or = CryptoJS.AES.decrypt(text, pass);
  return or.toString(CryptoJS.enc.Utf8);
}
