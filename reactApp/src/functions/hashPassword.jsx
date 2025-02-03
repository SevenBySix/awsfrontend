import Hashes from "jshashes";

// function that hashes the password.  Allows other code to execute while the password is being hashed.
export async function hashPassword(password) {

  // Create a SHA256 hash

  // creates a sha256 hash object
  const SHA256 = new Hashes.SHA256();

  // password is hashed using the hex function in the SHA256 object
  const hash = SHA256.hex(password);
  
  return hash; 
}

