export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/HarshSeth11");
    return response.json();
}