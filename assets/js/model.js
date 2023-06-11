// Set API fetching time out
export const timeOut = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(() => {
            reject(new Error('Fetching took to long!'));
        }, sec * 1000);
    });
}
// Get the user info
export const getUserInfo = async function () {
    try {
        const res = await Promise.race([fetch('https://jsonplaceholder.typicode.com/users/1'), timeOut(2)]);
        if (!res.ok) {
            throw new Error('Something went wrong! Please try again');
        }
        const data = await res.json();

        return data;
    } catch (err) {
        throw err.message;
    }
}
