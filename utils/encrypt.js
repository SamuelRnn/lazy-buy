/* import CryptoJS from "crypto-js";
import { toByteArray, fromByteArray } from "base64-js";
import { TextEncoderLite } from "text-encoder-lite";
import { TextDecoder } from "util";
//import { TextEncoderLite, TextDecoderLite } from "text-encoder-lite";




export function encrypt(email, pass) {
  let text = CryptoJS.AES.encrypt(email, pass);
  let utf8Encrypted = new TextEncoderLite().encode(text)
  let finalText = toByteArray(utf8Encrypted);
  return finalText.toString();
}

export function decrypt(text, pass) {
  let binaryEncrypted = fromByteArray(text);
  let utf8Encrypted =  new TextDecoder().decode(binaryEncrypted)
  let or = CryptoJS.AES.decrypt(utf8Encrypted, pass);
  let orr = or.toString(CryptoJS.enc.Utf8);
  return orr;
}
 */
// desencriptar coas
/* var encoded = "string codificado en base64";

// Desencode el string codificado en base64
var binaryEncrypted = atob(encoded);

// Convertir el texto encriptado a formato UTF-8
var utf8Encrypted = new TextDecoder().decode(binaryEncrypted);

// Desencriptar el texto
var decrypted = CryptoJS.AES.decrypt(utf8Encrypted, secretKey);

console.log(decrypted.toString(CryptoJS.enc.Utf8));

 */

//encryptar cosas
/* var text = "texto a encriptar";

// Clave secreta
var secretKey = "clave secreta";

// Encriptar el texto
var encrypted = CryptoJS.AES.encrypt(text, secretKey);

// Convertir el texto encriptado a formato UTF-8
var utf8Encrypted = new TextEncoder().encode(encrypted);

// Convertir el texto encriptado a formato ASCII
var encoded = btoa(utf8Encrypted); */
