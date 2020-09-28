// https://developer.spotify.com/documentation/web-playback-sdk/quick-start
// click login button
// Redirect to spotify login page
// Redirect to home page once Authorized
export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = 'your client Id';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      // #accessToken=mysecretkey&name=abdullah
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
