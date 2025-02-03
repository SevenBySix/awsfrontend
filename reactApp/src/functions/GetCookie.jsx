export async function getCookie(name) {
  const cookies = document.cookie.split(';'); // splits the cookie string where each ";" symbol is positioned.
  for(let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim(); // creates an array to store the whole string including the whitespace
    
    // picks which substring starts with the token name plus the equal sign
    if (cookie.startsWith(name + '=')) { 
      return cookie.substring(name.length + 1); // returns the token not counting "name="
    }
  }
  return null;
}