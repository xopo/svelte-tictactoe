const {env: { apiUrl }} = process;

export const nextMove = async space => {
    const url = `${apiUrl}/next-turn/${space}`;
    await fetch(url);
}

export const reset = async _ => {
    const url = `${apiUrl}/reset`;
    await fetch(url);
}